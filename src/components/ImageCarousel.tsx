'use client'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Button, MobileStepper } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'

import { useProductStore } from '@/stores/productStore'
import { ImageContent, VideoContent } from '@/utils/types'

interface Props {
  raw_media: {
    node: ImageContent | VideoContent
  }[]
}

export default function ImageCarousel({ raw_media }: Props) {
  const [activeStep, setActiveStep] = React.useState(0)

  const numOfMarketingTexts = useProductStore(
    (state) => state.descriptions.marketingTexts.length
  )

  // remove videos from mediaArray, sanitize content and strip the marketing images from carousel
  const images = raw_media
    .slice(numOfMarketingTexts + 1)
    .filter(
      (cur_media: {
        node: ImageContent | VideoContent
      }): cur_media is {
        node: ImageContent
      } => cur_media.node.mediaContentType === 'IMAGE'
    )
    .map((cur_media: { node: ImageContent }) => {
      return {
        url: cur_media.node.image.url,
        altText: cur_media.node.image.altText,
      }
    })

  const maxSteps = images.length

  const numOfVariants = useProductStore(
    (state) => state.product.variants.edges.length
  )
  const selectedIndex = useProductStore((state) => state.variantIndex)
  const variantClicked = useProductStore((state) => state.variantClicked)
  useEffect(() => {
    if (variantClicked) {
      useProductStore.getState().setVariantClicked(false)
      setActiveStep(images.length - (numOfVariants - selectedIndex))
    }
  }, [images.length, numOfVariants, selectedIndex, variantClicked])

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
  })

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const nextStep = prevActiveStep + 1
      return nextStep >= maxSteps ? 0 : nextStep
    })
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const nextStep = prevActiveStep - 1
      return nextStep < 0 ? maxSteps - 1 : nextStep
    })
  }

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }

  return (
    <Box sx={{ flexGrow: 1 }} {...handlers}>
      <Image
        width={1000}
        height={1000}
        style={{
          objectFit: 'cover',
          top: 0,
          right: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          borderRadius: 16,
          aspectRatio: '1/1',
        }}
        priority={true}
        src={images[activeStep].url}
        alt={images[activeStep].altText}
      />
      <MobileStepper
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button size='small' onClick={handleNext}>
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size='small' onClick={handleBack}>
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </Box>
  )
}
