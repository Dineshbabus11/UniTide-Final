import React from 'react';
import './Faq.scss';
import { Header } from '../header/Header';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Faq = () => {
  const faqData = [
    {
      question: 'How can I contact an alumnus listed in the directory?',
      answer:
        'You can use the contact button provided in the alumni card. If the contact is not public, please get in touch with our admin team.',
    },
    {
      question: 'How can I update my alumni profile?',
      answer:
        'Please log in using your registered email and navigate to the profile settings page to update your details.',
    },
    {
      question: 'I forgot my login credentials. What should I do?',
      answer:
        'Use the "Forgot Password" option on the login page to reset your credentials via your registered email.',
    },
    {
      question: 'Can I suggest new features for the alumni portal?',
      answer:
        'Absolutely! You can send your suggestions through the contact form on the Contact page.',
    },
  ];

  return (
    <>
      <Header />
      <div className="faq-page">
        <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: '16px' }}>
            <Typography variant="h4" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Here are some commonly asked questions about our alumni platform.
            </Typography>

            {faqData.map((item, index) => (
              <Accordion key={index} sx={{ mb: 1 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>
        </Container>
      </div>
    </>
  );
};
