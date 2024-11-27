import React from 'react';
import {Card, CardContent, Typography, Box, Avatar, Rating} from '@mui/material';
import {ImageContent, ReviewType} from "@/utils/types";
import ReviewImage from "@/components/Reviews/ReviewImage";

interface ReviewCardProps extends ReviewType {
    thumbnails: ImageContent["image"][];
}

const ReviewCard: React.FC<ReviewCardProps> = (
    {
        reviewText,
        reviewerName,
        reviewerAvatar,
        rating,
        date,
        thumbnailCount = 0,
        thumbnails,
    }) => {

    return (
        <Card
            sx={{
                borderRadius: 4,
                height: '100%',
            }}
        >
            <CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2}}>
                    {/* Reviewer Info */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        {reviewerAvatar && (
                            // <Avatar alt={reviewerName} src={reviewerAvatar}/>
                            <Avatar>{reviewerName.at(0)}</Avatar>
                        )}
                        <Box>
                            <Typography variant="subtitle2">{reviewerName}</Typography>
                            {date && (
                                <Typography variant="caption" color="text.secondary">
                                    {date}
                                </Typography>
                            )}
                        </Box>
                    </Box>

                    {/* Rating */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <Rating value={rating} precision={0.5} readOnly size="small"/>
                        <Typography variant="caption" color="text.secondary">
                            {rating.toFixed(1)} / 5
                        </Typography>
                    </Box>
                </Box>

                {/* Review Text */}
                <Typography variant="body2" sx={{color: 'text.primary'}}>
                    {reviewText}
                </Typography>

                {/* Thumbnails */}
                {thumbnailCount > 0 && (
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1,
                            flexWrap: 'wrap',
                            mt: 1,
                        }}
                    >
                        {thumbnails.map((cur_img: ImageContent["image"], index) => (
                            <ReviewImage key={index} cur_img={cur_img} />
                        ))}
                    </Box>
                )}

            </CardContent>
        </Card>
    );
};

export default ReviewCard;
