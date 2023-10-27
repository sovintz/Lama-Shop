import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {ExpandMoreOutlined} from '@mui/icons-material'
import {DescriptionsType, FaqObject} from "@/utils/types";
import {useProductStore} from "@/stores/productStore";



export default function FAQ() {

    const {faqTitle, faqs=[]}:DescriptionsType = useProductStore.getState().descriptions

    return (
        <Box sx={{pb:2}}>
            <Typography variant="h5" component="h2" sx={{ mb: 2}}>
                {faqTitle}
            </Typography>

            {faqs.map((c: FaqObject, index: number) => (
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