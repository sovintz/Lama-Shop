import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {DescriptionsType, ImageContent, ReviewType, VideoContent} from "@/utils/types";
import {useProductStore} from "@/stores/productStore";
import ReviewCard from "@/components/Reviews/ReviewCard";
import ReviewPageCollapse from "@/components/Reviews/ReviewPageCollapse";

export default function ReviewPage() {

    const {reviewsTitle, reviews = []}: DescriptionsType = useProductStore.getState().descriptions
    const lenOfFeaturedReviews = 3

    const numOfMarketingTexts = useProductStore.getState().descriptions.marketingTexts.length
    const numOfReviewThumbnails = useProductStore.getState().descriptions.reviews
        .reduce((sum, item) => sum + (item.thumbnailCount || 0), 0)
    const raw_media = useProductStore.getState().product.media.edges.slice(numOfMarketingTexts + 1, numOfMarketingTexts + numOfReviewThumbnails + 1)

    // get all images from raw_media and map them to an array of objects with url and altText
    const images = raw_media
        .filter((cur_media: { node: ImageContent | VideoContent }): cur_media is {
            node: ImageContent
        } => cur_media.node.mediaContentType === 'IMAGE')
        .map((cur_media: { node: ImageContent }) => {
            return {
                url: cur_media.node.image.url,
                altText: cur_media.node.image.altText,
            }
        })

    // calculate the start index of each thumbnail slice
    // used for slicing the images array to get the thumbnails for each review
    const thumbnailsCounts = useProductStore.getState().descriptions.reviews.map((review) => review.thumbnailCount)
    const thumbnailsSliceStarts = thumbnailsCounts.reduce((acc, count, index) => {
        if (index === 0) {
            acc.push(0);
        } else {
            acc.push(acc[index - 1] + thumbnailsCounts[index - 1]);
        }
        return acc;
    }, [] as number[]);

    return (
        <Box sx={{pb: 2}}>
            <Typography variant="h5" component="h2" sx={{mb: 2}}>
                {reviewsTitle}
            </Typography>

            <Grid container spacing={2}>
                {reviews?.splice(0, lenOfFeaturedReviews)?.map((c: ReviewType, index: number) => (
                    <Grid item key={index} xs={12} md={4}>
                        <ReviewCard {...c}
                                    thumbnails={images.slice(thumbnailsSliceStarts[index], thumbnailsSliceStarts[index] + c.thumbnailCount)}/>
                    </Grid>
                ))}
            </Grid>

            {reviews?.length > 0 &&
                <ReviewPageCollapse reviews={reviews} thumbnails={images}
                                    thumbnailsSliceStarts={thumbnailsSliceStarts.slice(lenOfFeaturedReviews)}/>}

        </Box>
    )
}