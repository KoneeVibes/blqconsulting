import { Box, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { LeadBlogsWrapper } from "./styled";
import { blogs } from "../../config/static";
import { BaseButton } from "../../component/button/styled";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

export const LeadBlogs = () => {
    const navigate = useNavigate();

    const handleNavigateToBlog = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        e.preventDefault();
        return navigate(`/blog/${index}`);
    };

    return (
        <LeadBlogsWrapper>
            <Box>
                <Typography
                    variant="subtitle1"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: "18px" }}
                    lineHeight={"normal"}
                    color={"var(--light-color)"}
                    whiteSpace={"normal"}
                    textAlign={"center"}
                >
                    Latest Blog
                </Typography>
                <Typography
                    variant="h2"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: "32px", tablet: "40px", laptop: "45px" }}
                    lineHeight={"normal"}
                    color={"var(--light-color)"}
                    whiteSpace={"normal"}
                    textAlign={"center"}
                >
                    Latest articles
                </Typography>
            </Box>
            <Stack
                className="blog-cards"
            >
                {blogs?.slice(0, 3).map((article, index) => {
                    return (
                        <Card
                            key={index}
                            className="blog-card"
                        >
                            <CardMedia
                                component={"img"}
                                sx={{
                                    height: "15.895rem",
                                    borderRadius: "10px",
                                }}
                                image={article.thumbnail}
                                title="article thumbnail"
                            />
                            <CardContent>
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"DM Sans"}
                                    fontWeight={400}
                                    fontSize={{ mobile: "14px" }}
                                    lineHeight={"normal"}
                                    color={"var(--blog-card-category-text-color)"}
                                    whiteSpace={"normal"}
                                >
                                    {article.category}
                                </Typography>
                                <Typography
                                    variant="h3"
                                    fontFamily={"Inter"}
                                    fontWeight={500}
                                    fontSize={{ mobile: "27px" }}
                                    lineHeight={"normal"}
                                    color={"var(--blog-card-category-text-color)"}
                                    whiteSpace={"normal"}
                                >
                                    {article.title}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <BaseButton
                                    disableElevation
                                    colour="var(--blog-card-category-text-color)"
                                    bgcolor="var(--light-color)"
                                    fontfamily="DM Sans"
                                    fontweight={400}
                                    fontsize="16px"
                                    border="none"
                                    endIcon={<ArrowForwardIcon />}
                                    onClick={(e) => handleNavigateToBlog(e, index)}
                                    padding="calc(var(--basic-padding)/9.5) 0"
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
                                        Read Blog
                                    </Typography>
                                </BaseButton>
                            </CardActions>
                        </Card>
                    )
                })}
            </Stack>
        </LeadBlogsWrapper >
    )
}