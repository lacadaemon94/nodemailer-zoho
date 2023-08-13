# Nodemailer with Zoho and Next.js

This repository provides a setup to use Nodemailer with Zoho in a Next.js application. It allows you to send emails using the Zoho SMTP service through a Next.js API route.

## Features

- **Next.js API Routes**: Utilizes the API routes feature of Next.js to handle email sending functionality.
- **Nodemailer with Zoho**: Uses Nodemailer along with Zoho's SMTP service for sending emails.
- **Environment Variable Configuration**: Allows easy configuration of Zoho credentials and other settings using environment variables.

## Setup

1. **Clone the Repository**:
   
```bash
   git clone https://github.com/lacadaemon94/nodemailer-zoho.git
   cd nodemailer-zoho
```

2. Install Dependencies:

```bash
npm install
```

3. Configure Environment Variables

Create a .env.local file in the root directory of the project. Add the following environment variables:

```env
ZOHO_USER=your_zoho_email@example.com
ZOHO_PASSWORD=your_zoho_password
```

Replace `your_zoho_email@example.com` with your Zoho email and `your_zoho_password` with your Zoho password or app-specific password if you have 2FA enabled.

4. Sending Emails:
To send an email, make a POST request to the `/api/contact` endpoint with the necessary payload.

## Contributing
If you find any issues or have suggestions, please open an issue or submit a pull request.
