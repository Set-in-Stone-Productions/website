import { google } from 'googleapis';

// Simple in-memory rate limiting (resets on cold start)
const rateLimit = new Map();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record) {
    rateLimit.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (now - record.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function formatTimestamp() {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'America/New_York'
  };
  return now.toLocaleString('en-US', options);
}

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      projectName,
      logline,
      synopsis,
      length,
      genre,
      budget,
      scriptStatus,
      materials,
      signature,
      honeypot
    } = req.body;

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      return res.status(200).json({ success: true });
    }

    // Validation
    if (!name || !email || !projectName || !logline || !synopsis || !signature) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const ip = req.headers['x-forwarded-for']?.split(',')[0] ||
               req.headers['x-real-ip'] || 'unknown';

    if (isRateLimited(ip)) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      return res.status(500).json({ error: 'Server configuration error' });
    }

    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    privateKey = privateKey.split('\\n').join('\n');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Insert a new row at position 2 (after header) to keep most recent at top
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{
          insertDimension: {
            range: {
              sheetId: 0,
              dimension: 'ROWS',
              startIndex: 1,
              endIndex: 2
            },
            inheritFromBefore: false
          }
        }]
      }
    });

    // Now update the newly inserted row with the form data
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Sheet1!A2:L2',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          formatTimestamp(),
          name,
          email,
          projectName,
          logline,
          synopsis,
          length || '',
          genre || '',
          budget || '',
          scriptStatus || '',
          materials || '',
          signature
        ]],
      },
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
};
