import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { FoundationsWrapper } from "./styled";
import { Carousel } from "react-responsive-carousel";
import { foundations } from "../../config/static";

export const Foundations = () => {
    const matches = useMediaQuery('(min-width:768px)');

    return (
        <FoundationsWrapper>
            <Box
                component={"div"}
                className="title-area"
            >
                <Typography
                    variant="subtitle1"
                    fontFamily={"Allrounder Monument Test"}
                    fontWeight={500}
                    fontSize={{ mobile: "18px" }}
                    lineHeight={"normal"}
                    color={"var(--primary-color)"}
                    whiteSpace={"normal"}
                >
                    what sets us apart?
                </Typography>
                <Typography
                    variant="h2"
                    fontFamily={"Inter"}
                    fontWeight={500}
                    fontSize={{ mobile: "27px", tablet: "35px", laptop: "45px", desktop: "56px" }}
                    lineHeight={"normal"}
                    color={"var(--light-color)"}
                    whiteSpace={"normal"}
                >
                    Cooperation based on solid foundations
                </Typography>
            </Box>
            <Carousel
                autoPlay={true}
                autoFocus={true}
                infiniteLoop={true}
                interval={2000}
                emulateTouch={true}
                showIndicators={false}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={matches ? 40 : 100}
            >
                {foundations.map((foundation, index) => {
                    return (
                        <Stack
                            key={index}
                            className="foundation-stack"
                        >
                            <Box>
                                <Typography
                                    variant="h3"
                                    fontFamily={"Inter"}
                                    fontWeight={500}
                                    fontSize={{ mobile: "27px", }}
                                    lineHeight={"normal"}
                                    color={"var(--dark-variant-color)"}
                                    textAlign={"left"}
                                    whiteSpace={"normal"}
                                >
                                    {foundation.title}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="body1"
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                    fontSize={{ mobile: "20px", }}
                                    lineHeight={"normal"}
                                    color={"var(--prospective-problem-description-color)"}
                                    textAlign={"left"}
                                    whiteSpace={"normal"}
                                >
                                    {foundation.body}
                                </Typography>
                            </Box>
                        </Stack>
                    )
                })}
            </Carousel>
        </FoundationsWrapper>
    )
}