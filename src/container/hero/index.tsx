import { Box, Stack, Typography } from "@mui/material";
import { HeroWrapper } from "./styled";
import React from "react";
import { HeroPropsType } from "../../type/container.type";

export const Hero: React.FC<HeroPropsType> = ({ hasThumbnail, subtitle, romanHeaderMessage, italizedHeaderMessage, body, thumbnail }) => {
    return (
        <HeroWrapper>
            <Stack
                className="heading"
            >
                <Box>
                    {subtitle && (
                        <Typography
                            variant="subtitle1"
                            fontFamily={"Allrounder Monument Test"}
                            fontWeight={500}
                            fontSize={{ mobile: "18px" }}
                            lineHeight={"normal"}
                            color={"var(--primary-color)"}
                            whiteSpace={"normal"}
                            marginBlockEnd={"calc(var(--basic-margin)/8)"}
                        >
                            {subtitle}
                        </Typography>
                    )}
                    <Typography
                        variant="h1"
                        fontFamily={"Inter"}
                        fontWeight={500}
                        fontSize={{ mobile: "28px", tablet: "42px", laptop: "52px", desktop: "64px", xl: "70px" }}
                        lineHeight={"normal"}
                        color={"var(--light-color)"}
                        whiteSpace={"normal"}
                    >
                        {romanHeaderMessage} <Typography
                            component={"span"}
                            fontFamily={"TeX Gyre Termes"}
                            fontWeight={400}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            whiteSpace={"inherit"}
                        >
                            {italizedHeaderMessage}
                        </Typography>
                    </Typography>
                </Box>
                {body && (
                    <Box>
                        <Typography
                            variant="body1"
                            fontFamily={"DM Sans"}
                            fontWeight={400}
                            fontSize={{ mobile: "25px", }}
                            lineHeight={"normal"}
                            color={"var(--hero-body-color)"}
                            whiteSpace={"normal"}
                        >
                            {body}
                        </Typography>
                    </Box>
                )}
            </Stack>
            {hasThumbnail && (
                <Box
                    component={"div"}
                    className="thumbnail"
                >
                    <img
                        src={thumbnail}
                        alt="hero-thumbnail"
                    />
                </Box>
            )}
        </HeroWrapper>
    )
}