// import React from 'react'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styles = {
    color: '#000',
    padding: "0 1rem",
    background: '#E5E5E5',
    margin: "1rem 0",
    '& .MuiAccordionDetails-root .MuiTypography-root': {
        fontSize: "14px"
    },
    '& .MuiAccordionSummary-content, & .MuiAccordionSummary-expandIconWrapper': {
        borderBottom: "1px solid #0000001f",
        paddingY: "1rem",
        margin: 0
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        borderTop: "1px solid #0000001f",
        paddingY: "1rem",
        borderBottom: 0
    },
}

const data = [
    {
        title: "What is the Yenreach marketplace?",
        content: "The Yenreach marketplace is an online platform where buyers can browse and purchase products and services from various sellers."
    },
    {
        title: "How can I access the Yenreach marketplace?",
        content: "You can access the Yenreach marketplace through the Yenreach App or by visiting the Yenreach website at www.Yenreach.com."
    },
    {
        title: "Is it free to use the Yenreach marketplace?",
        content: "Yes, it is free to browse and search for products and services on the Yenreach marketplace."
    },
    {
        title: "What is Yenreach Job?",
        content: "Yenreach Job is an online job listing platform where job seekers can search for job vacancies and employers can post their job vacancies"
    },
    {
        title: "How do I search for jobs on Yenreach?",
        content: "To search for jobs on Yenreach, simply visit the website and enter keywords related to the job you're looking for in the search bar. You can also filter your search by location, job type, and salary range."
    },
    {
        title: "How do I apply for a job on Yenreach?",
        content: "To apply for a job on Yenreach, create a user account by providing personal valid information. click on the job listing you're interested in and follow the instructions provided by the employer. This may include submitting a resume and cover letter or completing an online application form."
    },
]

const index = () => {
    return (
            <div>
                {data?.map((faq, index) => (
                    <Accordion sx={styles} key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{faq?.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {faq?.content}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
    )
}

export default index