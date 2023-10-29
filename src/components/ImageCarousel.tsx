"use client"
import React, {useEffect} from "react";
import {Box} from "@mui/system";
import {Button, MobileStepper} from "@mui/material";
import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';
import {useSwipeable} from "react-swipeable";
import Image from "next/image";
import {useProductStore} from "@/stores/productStore";

export default function ImageCarousel({raw_images} : any) {
    const [activeStep, setActiveStep] = React.useState(0);

    const numOfMarketingTexts = useProductStore(state => state.descriptions.marketingTexts.length)

    const images = raw_images.slice(numOfMarketingTexts + 1).map((cur_img : any) => {
        return {
            imgPath: cur_img.node.url,
            alt: cur_img.node.altText,
        }
    })

    const maxSteps = images.length;

    const numOfVariants = useProductStore(state => state.product.variants.edges.length)
    const selectedIndex = useProductStore(state => state.variantIndex)
    const variantClicked = useProductStore(state => state.variantClicked)
    useEffect( () => {
        if(variantClicked) {
            useProductStore.getState().setVariantClicked(false)
            setActiveStep(images.length - (numOfVariants - selectedIndex))
        }
    }, [variantClicked])

    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handleBack(),
    });

    const handleNext = () => {
        setActiveStep((prevActiveStep) => {
            const nextStep = prevActiveStep + 1;
            return nextStep >= maxSteps ? maxSteps - 1 : nextStep;
        });
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => {
            const nextStep = prevActiveStep - 1;
            return nextStep <= 0 ? 0 : nextStep;
        });
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ flexGrow: 1}} {...handlers}>

            {images.map((cur_img: any, index: number) => (
                <div key={index}>
                    {activeStep === index && (
                        <Image
                            width={1000}
                            height={1000}
                            style={{
                                objectFit: "cover",
                                top: 0,
                                right: 0,
                                zIndex: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius:16,
                            }}
                            src={cur_img.imgPath}
                            alt={cur_img.alt}
                        />

                    )}

                </div>
            ))}
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        < KeyboardArrowRight/>
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        < KeyboardArrowLeft/>
                    </Button>
                }/>
        </Box>
    );
}