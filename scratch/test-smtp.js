const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Manually parse .env.local
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').filter(line => line.includes('=') && !line.startsWith('#')).forEach(line => {
  const [key, ...value] = line.split('=');
  const val = value.join('=').trim().replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
  env[key.trim()] = val;
});

async function sendTestMail() {
  console.log('Sending real test mail to info@blackuniquediamond.com...');
  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT),
    secure: Number(env.SMTP_PORT) === 465,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"System Test" <${env.SMTP_USER}>`,
    to: "info@blackuniquediamond.com",
    subject: "SMTP Final Test",
    text: "This is a test to verify everything is working!",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Final Test Successful! Mail ID:', info.messageId);
  } catch (error) {
    console.error('❌ Failed to send final test mail:', error.message);
  }
}

sendTestMail();
