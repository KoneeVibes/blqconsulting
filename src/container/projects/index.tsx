import { Box, Stack, Typography } from "@mui/material";
import { ProjectsWrapper } from "./styled";
import { projects } from "../../config/static";
import { BaseButton } from "../../component/button/styled";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from "react-router-dom";

export const Projects = () => {
    const navigate = useNavigate();

    const handleNavigateToProjectDetailsPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.preventDefault();
        return navigate(`/project/${id}`);
    };

    return (
        <ProjectsWrapper>
            <Box
                component={"div"}
                className="heading"
            >
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
                    extraordinary projects
                </Typography>
                <Typography
                    variant="h2"
                    fontFamily={"Inter"}
                    fontWeight={500}
                    fontSize={{ mobile: "28px", tablet: "42px", laptop: "52px", desktop: "65px" }}
                    lineHeight={"normal"}
                    color={"var(--light-color)"}
                    whiteSpace={"normal"}
                >
                    Designing the big things begins with small steps
                </Typography>
            </Box>
            <Stack
                className="projects"
            >
                {projects.map((project, index) => {
                    return (
                        <Stack
                            key={index}
                            className="project"
                        >
                            <Box
                                component={"div"}
                                className="project-thumbnail"
                            >
                                <img
                                    src={project.thumbnail}
                                    alt="project-thumbnail"
                                />
                            </Box>
                            <Stack
                                className="project-detail"
                            >
                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily={"Allrounder Monument Test"}
                                        fontWeight={500}
                                        fontSize={{ mobile: "18px" }}
                                        lineHeight={"normal"}
                                        color={"var(--light-color)"}
                                        whiteSpace={"normal"}
                                        marginBlockEnd={"calc(var(--basic-margin)/8)"}
                                    >
                                        extraordinary projects
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Inter"}
                                        fontWeight={500}
                                        fontSize={{ mobile: "33px" }}
                                        lineHeight={"normal"}
                                        color={"var(--light-color)"}
                                        whiteSpace={"normal"}
                                    >
                                        Designing the big things begins with small steps
                                    </Typography>
                                </Box>
                                <Stack
                                    className="tag-stack"
                                >
                                    {project.tags.map((tag, index) => {
                                        return (
                                            <Box
                                                key={index}
                                                component={"div"}
                                                className="tag-box"
                                            >
                                                <Typography
                                                    variant="subtitle2"
                                                    fontFamily={"Inter"}
                                                    fontWeight={400}
                                                    fontSize={{ mobile: "15px" }}
                                                    lineHeight={"normal"}
                                                    color={"var(--light-color)"}
                                                    whiteSpace={"normal"}
                                                >
                                                    {tag}
                                                </Typography>
                                            </Box>
                                        )
                                    })}
                                </Stack>
                                <ul
                                    className="items-list"
                                >
                                    {project.items.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                            >
                                                {item}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <Box
                                    component={"div"}
                                    className="read-more-button"
                                >
                                    <BaseButton
                                        disableElevation
                                        colour="var(--light-color)"
                                        fontfamily="Inter"
                                        border="none"
                                        padding="calc(var(--basic-padding)/4) 0"
                                        endIcon={<ArrowRightAltIcon />}
                                        onClick={(e) => handleNavigateToProjectDetailsPage(e, index)}
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
                                            Read More
                                        </Typography>
                                    </BaseButton>
                                </Box>
                            </Stack>
                        </Stack>
                    )
                })}
            </Stack>
        </ProjectsWrapper>
    )
}