import { Box, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import { SolutionsListWrapper } from "./styled";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { solutions } from "../../config/static";
import { BaseButton } from "../../component/button/styled";
import { useNavigate } from "react-router-dom";
import { SouthEastIcon } from "../../asset";

export const SolutionsList = () => {
    const navigate = useNavigate();
    const matches = useMediaQuery('(min-width:1024px)');

    const handleNavigateToSolutionsPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        return navigate("/solution");
    };

    return (
        <SolutionsListWrapper>
            <Box
                component={"div"}
                className="solutions-list-upper-section"
            >
                <Typography
                    variant="subtitle1"
                    fontFamily={"DM Sans"}
                    fontWeight={500}
                    fontSize={{ mobile: "18px" }}
                    lineHeight={"normal"}
                    color={"var(--primary-color)"}
                    whiteSpace={"normal"}
                >
                    WHAT DO WE DO?
                </Typography>
                <Typography
                    variant="h2"
                    fontFamily={"Inter"}
                    fontWeight={500}
                    fontSize={{ mobile: "32px", tablet: "40px", laptop: "60px", desktop: "70px" }}
                    lineHeight={"normal"}
                    color={"var(--light-color)"}
                    whiteSpace={"normal"}
                >
                    We create <Typography
                        component={"span"}
                        fontFamily={"TeX Gyre Termes"}
                        fontWeight={400}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"var(--light-color-variant)"}
                        whiteSpace={"inherit"}
                    >
                        expert solutions
                    </Typography>
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
                {solutions.map((solution, index) => {
                    return (
                        <Card
                            key={index}
                            className="solution-card"
                            sx={{ backgroundImage: `url(${solution.bg})` }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h3"
                                    fontFamily={"TeX Gyre Termes"}
                                    fontWeight={400}
                                    fontSize={{ mobile: "24px", tablet: "35px", laptop: "50px", }}
                                    lineHeight={"normal"}
                                    color={"var(--primary-color)"}
                                    textAlign={"left"}
                                    whiteSpace={"normal"}
                                >
                                    {solution.italizedTitle} <Typography
                                        component={"span"}
                                        fontFamily={"Allrounder Monument Test"}
                                        fontWeight={500}
                                        fontSize={{ mobile: "24px", tablet: "35px", }}
                                        lineHeight={"inherit"}
                                        color={"var(--light-color)"}
                                        textAlign={"inherit"}
                                        whiteSpace={"inherit"}
                                    >
                                        {solution.romanTitle}
                                    </Typography>
                                </Typography>
                                <Typography
                                    variant="body1"
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                    fontSize={{ mobile: "15px" }}
                                    lineHeight={"normal"}
                                    color={"var(--light-color)"}
                                    textAlign={"left"}
                                    whiteSpace={"normal"}
                                >
                                    {solution.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </Carousel>
            <Box
                component={"div"}
                className="view-solutions-button"
            >
                <BaseButton
                    disableElevation
                    variant="contained"
                    radius="0px"
                    colour="var(--dark-variant-color)"
                    bgcolor="var(--light-color)"
                    fontfamily="Inter"
                    fontsize="32px"
                    padding="calc(var(--basic-padding)/4) calc(var(--basic-padding)/2)"
                    endIcon={<SouthEastIcon />}
                    onClick={handleNavigateToSolutionsPage}
                >
                    <Typography
                        variant={"button"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        View Solutions
                    </Typography>
                </BaseButton>
            </Box>
        </SolutionsListWrapper>
    )
}