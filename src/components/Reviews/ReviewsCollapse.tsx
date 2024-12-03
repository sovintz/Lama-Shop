'use client'

import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'

import ReviewCard from '@/components/Reviews/ReviewCard'
import { useProductStore } from '@/stores/productStore'
import { DescriptionsType, ImageContent, ReviewType } from '@/utils/types'

interface ReviewPageCollapseProps {
  reviews: ReviewType[]
  thumbnails: ImageContent['image'][]
  thumbnailsSliceStarts: number[]
}

export default function ReviewsCollapse({
  reviews,
  thumbnails,
  thumbnailsSliceStarts,
}: ReviewPageCollapseProps) {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded(!expanded)
  }

  const { expandMoreReviewsButtonText }: DescriptionsType =
    useProductStore.getState().descriptions

  return (
    <Box>
      {/* Collapsible Reviews */}
      <Collapse in={expanded} sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {reviews.map((c, index) => (
            <Grid item key={index} xs={12} md={4} lg={4}>
              <ReviewCard
                {...c}
                thumbnails={thumbnails.slice(
                  thumbnailsSliceStarts[index],
                  thumbnailsSliceStarts[index] + c.thumbnailCount
                )}
              />
            </Grid>
          ))}
        </Grid>
      </Collapse>

      {/* Toggle Button */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginY: 2,
          cursor: 'pointer',
          '&:hover': {
            color: 'primary.dark',
          },
        }}
        onClick={handleToggle}
      >
        <Typography
          variant='subtitle2'
          sx={{
            width: '100%',
            textAlign: 'center',
          }}
        >
          {expandMoreReviewsButtonText}
        </Typography>
        <Box sx={{ color: 'inherit' }}>
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </Box>
      </Box>
    </Box>
  )
}
