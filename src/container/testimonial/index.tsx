import { Box, Card, CardContent, IconButton, Stack, Typography } from "@mui/material";
import { TestimonialWrapper } from "./styled";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { testimonials } from "../../config/static";
import { Fragment } from "react/jsx-runtime";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const Testimonial = () => {
    return (
        <TestimonialWrapper>
            <Box>
                <Typography
                    variant="h2"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: "32px", tablet: "40px", desktop: "50px" }}
                    lineHeight={"normal"}
                    color={"var(--dark-variant-header-color)"}
                    whiteSpace={"normal"}
                    textAlign={"center"}
                >
                    What our customers say
                </Typography>
            </Box>
            <Carousel
                autoPlay={true}
                showThumbs={false}
                showStatus={false}
                emulateTouch={true}
                infiniteLoop={true}
                showIndicators={false}
                renderArrowPrev={(clickHandler, hasPrev) => {
                    return (
                        hasPrev && (
                            <IconButton
                                onClick={clickHandler}
                                sx={{
                                    position: 'absolute',
                                    left: 15,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 2,
                                    cursor: 'pointer',
                                    backgroundColor: 'transparent',
                                    borderRadius: '50%',
                                    padding: 'calc(var(--basic-padding)/8)',
                                    display: { mobile: "none", tablet: "inline-flex" },
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    }
                                }}
                            >
                                <ArrowBackIcon sx={{ color: "var(--subtitle-color)" }} />
                            </IconButton>
                        )
                    )
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                    return (
                        hasNext && (
                            <IconButton
                                onClick={clickHandler}
                                sx={{
                                    position: 'absolute',
                                    right: 15,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 2,
                                    cursor: 'pointer',
                                    backgroundColor: 'transparent',
                                    borderRadius: '50%',
                                    padding: 'calc(var(--basic-padding)/8)',
                                    display: { mobile: "none", tablet: "inline-flex" },
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    }
                                }}
                            >
                                <ArrowForwardIcon sx={{ color: "var(--subtitle-color)" }} />
                            </IconButton>
                        )
                    )
                }}
            >
                {testimonials.map((testimonial, index) => {
                    return (
                        <Card
                            className="testimonial-item"
                        >
                            <CardContent>
                                <Stack
                                    className="star-stack"
                                >
                                    {[...Array(5)].map((_, i) => (
                                        <Fragment
                                            key={i}
                                        >
                                            {i < testimonial.stars ? (
                                                <StarIcon
                                                    key={i}
                                                    sx={{ color: "var(--primary-color)", fontSize: 20 }}
                                                />
                                            ) : (
                                                <StarBorderIcon
                                                    key={i}
                                                    sx={{ color: "var(--off-dark-color)", fontSize: 20 }}
                                                />
                                            )}
                                        </Fragment>
                                    ))}
                                </Stack>
                                <Box>
                                    <Typography
                                        variant="body1"
                                        fontFamily={"Figtree"}
                                        fontWeight={500}
                                        fontSize={{ mobile: "24px", miniTablet: "32px" }}
                                        lineHeight={"normal"}
                                        color={"var(--dark-variant-header-color)"}
                                        whiteSpace={"normal"}
                                        textAlign={"center"}
                                    >
                                        {testimonial.review}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily={"Allrounder Monument Test"}
                                        fontWeight={500}
                                        fontSize={{ mobile: "20px" }}
                                        lineHeight={"normal"}
                                        color={"var(--dark-variant-header-color)"}
                                        whiteSpace={"normal"}
                                        textAlign={"center"}
                                    >
                                        {testimonial.reviewer}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        fontFamily={"Figtree"}
                                        fontWeight={400}
                                        fontSize={{ mobile: "18px" }}
                                        lineHeight={"normal"}
                                        color={"var(--subtitle-color)"}
                                        whiteSpace={"normal"}
                                        textAlign={"center"}
                                    >
                                        {testimonial.jobtitle}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    )
                })}
            </Carousel>
        </TestimonialWrapper>
    )
}