import {Accordion, AccordionDetails, AccordionSummary, Divider, Typography} from "@mui/material";
import {Box, styled} from "@mui/system";
import {ExpandMoreOutlined} from '@mui/icons-material'


interface FAQObject {
    question: string,
    answer: string
}

const content: FAQObject[] = [
    {question: "How long does shipping take?", answer: "Shipping takes 2-3 weeks"},
    {question: "Q2?", answer: "A2"},
]

export default function FAQ() {
    return (
        <Box sx={{px: 2}}>
            {content.map((c: FAQObject, index: number) => (
                <Accordion key={index} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{c.question}</Typography>

                    </AccordionSummary>
                    <AccordionDetails sx={{px: 0, borderTop: '1px solid rgba(0, 0, 0, .125)',}}>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography sx={{px: 2, mt: 2}}>{c.answer}</Typography>
                        </Box>

                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
}