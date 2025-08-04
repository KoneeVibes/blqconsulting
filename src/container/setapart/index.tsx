import { Box, Stack, Typography } from "@mui/material";
import { SetApartWrapper } from "./styled";
import { distinguishers } from "../../config/static";

export const SetApart = () => {
    return (
        <SetApartWrapper>
            <Stack
                className="top-stack"
            >
                <Box
                    component={"div"}
                    className="top-stack-item"
                >
                    <Typography
                        variant="h2"
                        fontFamily={"Inter"}
                        fontWeight={500}
                        fontSize={{ mobile: "32px", tablet: "40px", laptop: "60px", desktop: "70px" }}
                        lineHeight={"normal"}
                        color={"var(--light-color)"}
                        whiteSpace={"normal"}
                    >
                        What sets <Typography
                            component={"span"}
                            fontFamily={"TeX Gyre Termes"}
                            fontWeight={400}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"var(--light-color-variant)"}
                            whiteSpace={"inherit"}
                        >
                            Us Apart?
                        </Typography>
                    </Typography>
                </Box>
                <Box
                    component={"div"}
                    className="top-stack-item"
                >
                    <Typography
                        variant="h2"
                        fontFamily={"Inter"}
                        fontWeight={600}
                        fontSize={{ mobile: "24px", tablet: "32px", laptop: "42px" }}
                        lineHeight={"normal"}
                        color={"var(--light-color)"}
                        whiteSpace={"normal"}
                    >
                        Choosing the right partner can make all the difference. Here's is why businesses trust us to deliver;
                    </Typography>
                </Box>
            </Stack>
            <Stack
                className="bottom-stack"
            >
                {distinguishers.map((distinguisher, index) => {
                    return (
                        <Stack
                            key={index}
                            className="bottom-stack-item"
                            sx={{ background: distinguisher.bgColor }}
                        >
                            <Box
                                overflow={"hidden"}
                            >
                                <img
                                    src={distinguisher.icon}
                                    alt="distinguisher-icon"
                                />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h3"
                                    fontFamily={"Inter"}
                                    fontWeight={500}
                                    fontSize={{ mobile: "35px" }}
                                    lineHeight={"normal"}
                                    color={"var(--primary-color)"}
                                    whiteSpace={"normal"}
                                    marginBlockEnd={"calc(var(--basic-margin)/2)"}
                                >
                                    {distinguisher.romanTitle} <Typography
                                        component={"span"}
                                        fontFamily={"TeX Gyre Termes"}
                                        fontWeight={400}
                                        fontSize={"inherit"}
                                        lineHeight={"inherit"}
                                        color={"inherit"}
                                        whiteSpace={"inherit"}
                                    >
                                        {distinguisher.italizedTitle}
                                    </Typography>
                                </Typography>
                                <Typography
                                    variant="body1"
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                    fontSize={{ mobile: "21px" }}
                                    lineHeight={"normal"}
                                    color={"var(--light-color)"}
                                    whiteSpace={"normal"}
                                >
                                    {distinguisher.body}
                                </Typography>
                            </Box>
                        </Stack>
                    )
                })}
            </Stack>
        </SetApartWrapper>
    )
}