# Contact Form Setup Guide

The contact form is now configured to use Web3Forms for handling submissions.

## Steps to Enable the Contact Form

### 1. Get Your Web3Forms Access Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Enter your email address (admin@crivac.com)
3. You'll receive a free access key via email
4. No account creation required!

### 2. Configure Environment Variable

Create a `.env` file in the root directory:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your_actual_access_key_here
```

**Important:** Replace `your_actual_access_key_here` with the access key you received from Web3Forms.

### 3. Update .gitignore

Make sure `.env` is in your `.gitignore` file to keep your access key secure:

```
.env
.env.local
```

### 4. Deploy Configuration

When deploying to Vercel, Netlify, or other platforms:

1. Go to your project's environment variables settings
2. Add: `NEXT_PUBLIC_WEB3FORMS_KEY` with your access key as the value
3. Redeploy your site

## Features Implemented

- ✅ Form validation using Zod
- ✅ Real-time error messages
- ✅ Loading states during submission
- ✅ Success/error toast notifications
- ✅ Automatic form reset after successful submission
- ✅ Disabled inputs during submission
- ✅ Accessible form labels and error messages

## Testing the Form

1. Fill out all required fields
2. Click "Send Message"
3. You should see a success toast notification
4. The form will reset automatically
5. Check your email (admin@crivac.com) for the message

## Troubleshooting

- **Form not sending:** Make sure the environment variable is set correctly
- **No toast notifications:** The Toaster component is already added to App.tsx
- **Validation errors:** All fields are required with minimum length requirements

## Form Fields Validation

- **First Name:** Minimum 2 characters
- **Last Name:** Minimum 2 characters
- **Email:** Valid email format required
- **Subject:** Minimum 5 characters
- **Message:** Minimum 10 characters
