import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from '/src/data/faq-data.json'
import Header from '/src/components/Header'
import Footer from '../../components/Footer'


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


const index = () => {
    console.log("j", )
    return (
        <>
        <Header />
            <div className="top top-banner flex flex-col justify-center items-center gap-4 bg-[url(assets/blog-hero-bg.svg)]">
                <h1 className="text-xl md:text-3xl text-[#89F1B4] font-semibold text-center">
                    Frequently asked questions
                </h1>
                <h2 className='text-sm md:text-base text-center px-12 text-white'>Have a question? Check out the accordion below</h2>
            </div>
            <section className='px-4 py-12 sm:px-20 md:px-32 lg:px-64 mb-11'>
                    {Object.keys(data.data).map(key => {
                     return   <div key={key} className='mb-12'>
                               <h1 className="text-base font-semibold capitalize">
                                    {key}
                                </h1>
                            {data.data[key].map((faq, index) => (
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
                    }
                        )}
            </section>
        <Footer />
        </>
    )
}

export default index