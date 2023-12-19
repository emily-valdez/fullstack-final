import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import NavBar from './NavBar';
import { Link } from 'react-router-dom'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is BookTok?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          BookTok is a subcommunity on the app TikTok that focuses on books and literature. Creators make videos reviewing, discussing, and joking about the books they read. These books range in genre, but many creators tend to focus on young adult fiction, young adult fantasy, and romance. Read more about BookTok on <Link to="https://en.wikipedia.org/wiki/BookTok">Wikipedia</Link>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Do I have to create an account?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You do not need an account to view books and author details; however, if you wish to save books to your bookshelf, you will need to create an account. Register <Link to="http://localhost:3000/login">here</Link>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is My Bookshelf?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            My Bookshelf is your own private library where you can save books from the Books collection on this site. You can also add books to the bookshelf, if what you want to read is not yet added to our database.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>What is a spicy rating?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The spicy user rating indicates that the book contains content of a sexual or romantic nature. Books with higher spicy counts may be recommended for 18+; though please confirm any age restrictions on the author's website (linked on each author card).
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}