# FormBold Setup Guide

The submission form has been updated to use FormBold - a FREE form submission service with file upload support (100 submissions/month).

## How FormBold Works

1. When a user submits the form, it's sent to FormBold's servers
2. FormBold processes the submission and emails it to `submission@setinstoneproductions.com`
3. File attachments up to 5MB are supported (files are stored on CDN)
4. No ads or branding in emails
5. Built-in spam protection

## First-Time Setup

1. Go to https://formbold.com and sign up (free)
2. Create a new form in the dashboard
3. Copy your form endpoint URL (looks like: https://formbold.com/s/XXXXX)
4. Open `src/config/formbold.ts` and replace `YOUR_FORM_ID` with just the ID part (XXXXX)
5. That's it! The form is ready to use

## Features Implemented

- ✅ Drag-and-drop file upload with visual feedback
- ✅ File size validation (5MB limit)
- ✅ File uploads work on FREE tier (stored on CDN)
- ✅ Form validation before submission
- ✅ Clean email formatting without ads
- ✅ Custom subject line
- ✅ Redirect back to submissions page after success
- ✅ 100 free submissions per month
- ✅ Built-in spam protection

## Spam Protection

The form includes multiple layers of protection against abuse:

1. **30-Second Cooldown** - Prevents accidental double-submissions
2. **Honeypot Field** - Hidden field that catches bots (_gotcha field)
3. **Server-side Validation** - FormBold automatically checks for spam

## File Upload Notes

- Maximum file size: 5MB
- Only first file is uploaded (free tier limitation)
- Supported formats: PDF, DOC, DOCX, TXT, JPG, JPEG, PNG, ZIP
- Files are stored on CDN and links are sent with submission
- For multiple or larger files, users should use cloud storage links in the "Additional Materials" field

## Testing

1. Make sure you've added your FormBold form ID to `src/config/formbold.ts`
2. Fill out the form with test data
3. Attach a file (under 5MB)
4. Submit the form
5. Check `submission@setinstoneproductions.com` for the submission
6. File will be included as a CDN link

## Why FormBold?

- **Free tier includes file uploads**: Unlike Web3Forms where it's a Pro feature
- **100 submissions/month**: Sufficient for most projects
- **No ads**: Clean, professional emails
- **CDN storage**: Files are hosted and delivered via CDN links
- **Simple integration**: Just needs a form endpoint URL
- **Built-in spam protection**: No need for external captcha