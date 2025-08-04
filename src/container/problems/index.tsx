import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { ProblemsWrapper } from "./styled";
import { Carousel } from "react-responsive-carousel";
import { prospectiveProblems } from "../../config/static";

export const Problems = () => {
    const matches = useMediaQuery('(min-width:768px)');

    return (
        <ProblemsWrapper>
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
                    color={"var(--light-color)"}
                    whiteSpace={"normal"}
                >
                    what probLems do we solve?
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
                {prospectiveProblems.map((problem, index) => {
                    return (
                        <Stack
                            key={index}
                            className="problem-stack"
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
                                    {problem.title}
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
                                    {problem.body}
                                </Typography>
                            </Box>
                        </Stack>
                    )
                })}
            </Carousel>
        </ProblemsWrapper>
    )
}