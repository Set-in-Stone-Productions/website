# Implementation Plan for Website Changes

This document outlines the changes that have been made to the Set in Stone Productions website based on the requested fixes.

## 1. Home Page Changes

- ✅ Made the "Submit a Project" button smaller by changing its size from "lg" to "sm" and reducing text size
- ✅ Updated legal links in the footer to point to document paths (e.g., `/documents/terms-of-service.pdf`)

## 2. About Page Changes

- ✅ Removed the text sub-header: "Explore our diverse collection of award-winning work across multiple genres and formats."
- ✅ Updated team member bios to be more realistic and less AI-generated
- ⚠️ Note: The team member images still need to be replaced with real photos

## 3. Portfolio Section Changes

- ✅ Removed the subheader text
- ✅ Hidden the sorting feature for project categories (kept the code for future use)
- ✅ Replaced AI projects with real projects:
  - ROUTINE (2025) - Director: Jake Bernstein
  - Balls of Steel (2024) - Director: Jake Bernstein
  - CRAIG LIKES BADMITTEN (2024) - Director: Alden Bernstein
  - Ex Oblivione (2022) - Director: Jake Bernstein
- ⚠️ Note: Project images still need to be updated with real project images

## 4. Services Section Changes

- ✅ Updated service descriptions with the new text from the fixes document
- ✅ Hidden the Awards and Recognition feature (kept the code for future use)

## 5. Donate Section Changes

- ✅ Updated Member tier:
  - Kept $5/mo pricing
  - Removed "monthly newsletter" from benefits
- ✅ Updated A-List tier:
  - Changed price to "Total of $100" (instead of monthly)
  - Changed bullet point to "Free Physical Media and Merchandise"
- ✅ Updated VIP tier:
  - Changed price to "Single Donation over $1000"
  - Removed "Set Visits" from benefits
- ✅ Added links to Patreon, Indiegogo, and PayPal for donation buttons

## 6. Submission Form Changes

- ✅ Replaced all dropdown selects with free response text inputs
- ✅ Added file attachment input field (backend implementation needed)

## 7. Contact Section Changes

- ✅ Removed the sub-header: "Have questions or want to discuss a potential collaboration? Reach out to our team."
- ✅ Updated contact info to Jake (email, simplified address)
- ✅ Removed Business Hours section

## 8. CSS Fixes

- ✅ Fixed CSS import order in src/index.css to resolve warnings


2. **Backend Implementation**:
   - Set up form submission handling for the contact form
   - Implement file upload functionality for the submission form
   - Create and store legal documents for the footer links

3. **Testing**:
   - Test responsive design on various screen sizes
   - Ensure all links work properly
   - Verify form submissions



------
Later:  
1. Gather real images for team members and portfolio projects (Add images 
Change “Balls of Steel” to Documentary and more) and Replace AI team member images with real photos
3. Create the legal documents for the footer links and the pages (Terms of Service, Privacy Policy, Submission Agreement, Consent Form, Production Agreement)
4. Deploy the updated website to production 
