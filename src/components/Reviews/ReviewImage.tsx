"use client"

import {ImageContent} from "@/utils/types";
import Image from "next/image";
import React from "react";
import {Modal, Box, Fade, Backdrop} from "@mui/material";

const ReviewImage: React.FC<{ cur_img: ImageContent["image"] }> = ({cur_img}) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    return (
        <>
            <Image
                width={120}
                height={120}
                style={{
                    objectFit: "cover",
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    cursor: "pointer",
                }}
                priority={true}
                src={cur_img.url}
                alt={cur_img.altText}
                onClick={handleOpen}
            />

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modalOpen}
                onClose={handleClose}
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
                disableAutoFocus
            >
                <Fade in={modalOpen}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            boxShadow: 24,
                            borderRadius: 4,
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            width={1000}
                            height={1000}
                            style={{
                                display: 'block',
                                width: '80vmin',
                                height: 'auto',
                            }}
                            src={cur_img.url}
                            alt={cur_img.altText}
                        />
                    </Box>
                </Fade>
            </Modal>
        </>

    )
}

export default ReviewImage;