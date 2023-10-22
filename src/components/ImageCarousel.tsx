"use client"
import React from "react";
import {Box} from "@mui/system";
import {Button, MobileStepper} from "@mui/material";
import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';
import {useSwipeable} from "react-swipeable";
import Image from "next/image";

export default function ImageCarousel({raw_images} : any) {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = raw_images.length;

    const images = raw_images.map((cur_img : any) => {
        return {
            imgPath: cur_img.node.url,
            alt: cur_img.node.altText,
        }
    })

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
        <Box sx={{maxWidth: 400, flexGrow: 1}} {...handlers}>

            {images.map((cur_img: any, index: number) => (
                <div key={index}>
                    {activeStep === index && (
                        <Image
                            width={1000}
                            height={1000}
                            style={{
                                objectFit: "contain",
                                top: 0,
                                right: 0,
                                zIndex: 0,
                                width: '100%',
                                height: '100%',

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