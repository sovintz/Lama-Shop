"use client"
import {Avatar, Grid, Typography} from "@mui/material";
import Image from "next/image";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function NotFound() {

    const router = useRouter()

    useEffect(() => {
        router.replace('/')
    })
    return (
        <main>
            <Grid container sx={{height: '100vh'}} alignItems={"center"} justifyContent={"center"} direction="column">
                <Grid item>
                    <Avatar sx={{backgroundColor:'primary.light', width: 250, height: 250}}>
                        <Image
                            width={500}
                            height={500}
                            style={{
                                objectFit: "contain",
                                top: 0,
                                right: 0,
                                zIndex: 0,
                                width: '70%',
                                height: '70%',
                            }}
                            src="/images/logo.png"
                            alt="logo"
                        />

                    </Avatar>


                </Grid>
                <Grid item>
                    <Typography variant={"h5"} component={"h1"} align="center">
                        Lama ne najde te strani!
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant={"body1"} component={"h2"} align="center">

                    </Typography>
                </Grid>
            </Grid>
        </main>
    )
}