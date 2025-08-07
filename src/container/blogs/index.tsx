import { Box, Grid, Stack, Typography } from "@mui/material";
import { BlogsWrapper } from "./styled";
import { DotIcon } from "../../asset";
import { blogs } from "../../config/static";
import { useNavigate } from "react-router-dom";

export const Blogs = () => {
    const navigate = useNavigate();

    const handleNavigateToBlog = (id: number) => navigate(`/blog/${id}`);

    return (
        <BlogsWrapper>
            <Stack
                className="heading"
            >
                <Box
                    component={"div"}
                    className="dot-icon"
                >
                    <DotIcon />
                </Box>
                <Box
                    component={"div"}
                    className="title"
                >
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: "16px" }}
                        lineHeight={"normal"}
                        color={"var(--blog-heading-color)"}
                        whiteSpace={"normal"}
                        marginBlockEnd={"calc(var(--basic-margin)/8)"}
                    >
                        Latest articles
                    </Typography>
                </Box>
            </Stack>
            <Grid
                container
                rowSpacing={"calc(var(--flex-gap))"}
                columnSpacing={"calc(var(--flex-gap)/2)"}
            >
                {blogs?.map((blog: Record<string, any>, index: number) => {
                    return (
                        <Grid
                            key={index}
                            size={{ mobile: 12, tablet: 4 }}
                        >
                            <Stack
                                className="blog-stack"
                            >
                                <Box
                                    component={"div"}
                                    className="image-box"
                                    onClick={() => handleNavigateToBlog(index)}
                                >
                                    <img
                                        src={blog.thumbnail}
                                        alt={"Work Item"}
                                    />
                                </Box>
                                <Box
                                    component={"div"}
                                    className="detail-box"
                                >
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Inter"}
                                        fontWeight={400}
                                        fontSize={{ mobile: "18px" }}
                                        lineHeight={"normal"}
                                        color={"var(--light-color)"}
                                        whiteSpace={"normal"}
                                        sx={{ cursor: "pointer" }}
                                        onClick={() => handleNavigateToBlog(index)}
                                    >
                                        {blog.title}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant="body1"
                                        fontFamily={"Inter"}
                                        fontWeight={500}
                                        fontSize={{ mobile: "11px" }}
                                        lineHeight={"normal"}
                                        color={"var(--blog-title-color)"}
                                        whiteSpace={"normal"}
                                    >
                                        {`${blog.date} — ${blog.length}`}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    )
                })}
            </Grid>
        </BlogsWrapper>
    )
}