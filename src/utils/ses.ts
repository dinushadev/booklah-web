

import axios from 'axios';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export const sendEmailWithSES = async (data: EmailData) => {
  const AWS_SES_ENDPOINT = 'https://email.us-east-1.amazonaws.com'; // Replace with your AWS region endpoint
  const AWS_ACCESS_KEY = 'AKIAXWHDMFQAK7P5XCVV';
  const AWS_SECRET_KEY = 'txr7mcqnsYu/2J69iM1LOAxbigYmvd0DTfHh1eGV';

  const emailParams = {
    Source: 'hello@vi.com', // Replace with your SES verified email
    Destination: {
      ToAddresses: ['dnsw83@gmail.com']
    },
    Message: {
      Subject: {
        Data: 'New Sign Up on BookLah'
      },
      Body: {
        Text: {
          Data: `
            New sign up on BookLah:
            
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}
            ${data.message ? `Message: ${data.message}` : ''}
          `
        }
      }
    }
  };

  try {
    const response = await axios.post(AWS_SES_ENDPOINT, emailParams, {
      headers: {
        'Content-Type': 'application/json',
        'X-Amz-Date': new Date().toISOString(),
        'Authorization': `AWS3-HTTPS AWSAccessKeyId=${AWS_ACCESS_KEY}, Algorithm=HmacSHA256, Signature=${AWS_SECRET_KEY}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};