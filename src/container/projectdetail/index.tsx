import { Box, Grid, Stack, Typography } from "@mui/material";
import { ProjectDetailWrapper } from "./styled";
import logo from "../../asset/image/logo-white-text-variant.svg";
import { deliveryValues } from "../../config/static";
import { ProjectDetailPropsType } from "../../type/container.type";

export const ProjectDetail: React.FC<ProjectDetailPropsType> = ({ detail }) => {
    return (
        <ProjectDetailWrapper>
            <Stack
                className="non-dynamic-area"
            >
                <Box
                    component={"div"}
                    className="favicon-box"
                >
                    <img
                        src={logo}
                        alt="logo"
                    />
                </Box>
                <Stack>
                    {Object.entries(deliveryValues).map(([key, value], index) => (
                        <Box
                            key={index}
                        >
                            <Typography
                                variant="subtitle1"
                                fontFamily={"Inter"}
                                fontWeight={400}
                                fontSize={{ mobile: "20px" }}
                                lineHeight={"normal"}
                                color={"var(--delivery-value-color)"}
                                whiteSpace={"normal"}
                                marginBlockEnd={"calc(var(--basic-margin)/8)"}
                            >
                                {key}
                            </Typography>
                            <Typography
                                variant="body1"
                                fontFamily={"Inter"}
                                fontWeight={400}
                                fontSize={{ mobile: "20px" }}
                                lineHeight={"normal"}
                                color={"var(--light-color)"}
                                whiteSpace={"normal"}
                                marginBlockEnd={"calc(var(--basic-margin)/8)"}
                            >
                                {value}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </Stack>
            <Stack
                className="dynamic-area"
            >
                {detail.details.map((info: Record<string, any>, index: number) => {
                    return (
                        <Stack>
                            <Box>
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
                                    {info.subtitle}
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
                                    {info.subHeading}
                                </Typography>
                            </Box>
                            <Box>
                                {info.body1 && (
                                    <Typography
                                        variant="body1"
                                        fontFamily={"Inter"}
                                        fontWeight={400}
                                        fontSize={{ mobile: "25px" }}
                                        lineHeight={"normal"}
                                        color={"var(--light-color)"}
                                        whiteSpace={"normal"}
                                        marginBlockEnd={"calc(var(--basic-margin)/2)"}
                                    >
                                        {info.body1}
                                    </Typography>
                                )}
                                {info.body2 && (
                                    <Typography
                                        variant="body1"
                                        fontFamily={"Inter"}
                                        fontWeight={400}
                                        fontSize={{ mobile: "25px" }}
                                        lineHeight={"normal"}
                                        color={"var(--light-color)"}
                                        whiteSpace={"normal"}
                                        marginBlockEnd={"calc(var(--basic-margin)/2)"}
                                    >
                                        {info.body2}
                                    </Typography>
                                )}
                            </Box>
                            {info.thumbnail && (
                                <Box
                                    component={"div"}
                                    className={"thumbnail-box"}
                                >
                                    <img
                                        src={info.thumbnail}
                                        alt="logo"
                                    />
                                </Box>
                            )}
                        </Stack>
                    )
                })}
                <Grid
                    container
                    rowSpacing={"calc(var(--flex-gap)/3)"}
                    columnSpacing={"calc(var(--flex-gap)/6)"}
                >
                    {detail.gallery?.map((item: string, index: number) => {
                        return (
                            <Grid
                                key={index}
                                size={{ mobile: 12, tablet: 6 }}
                            >
                                <Box
                                    component={"div"}
                                    className="image-box"
                                >
                                    <img
                                        src={item}
                                        alt={"Work Item"}
                                    />
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            </Stack>
        </ProjectDetailWrapper>
    )
}