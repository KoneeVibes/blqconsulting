import { Box, Stack, Typography } from "@mui/material";
import { MissionWrapper } from "./styled";
import missionPersona from "../../asset/image/mission-persona.png";
import quoteIcon from "../../asset/icon/quote-icon.png";

export const Mission = () => {
    return (
        <MissionWrapper>
            <Box
                component={"div"}
                className="mission-persona"
            >
                <img
                    src={missionPersona}
                    alt="Mission Persona"
                />
            </Box>
            <Stack
                className="mission-statement"
            >
                <Box
                    component={"div"}
                    className="quote-icon"
                >
                    <img
                        src={quoteIcon}
                        alt="Quote Icon"
                    />
                </Box>
                <Box>
                    <Typography
                        variant="h3"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: "27px", tablet: "35px", laptop: "45px", desktop: "56px" }}
                        lineHeight={"normal"}
                        color={"var(--light-color)"}
                        textAlign={"left"}
                        whiteSpace={"normal"}
                    >
                        Our mission is to provide clients with secure and effective technology, ensuring their success in the digital realm...
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="body1"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: "21px", }}
                        lineHeight={"normal"}
                        color={"var(--light-color)"}
                        textAlign={"left"}
                        whiteSpace={"normal"}
                    >
                        ... so that they can focus on developing their business of the future. For more than 5 years, we have been helping to implement IT solutions to support sales, customer service and business scaling. We keep our fingers crossed for any new business opportunities and invite you to join us!
                    </Typography>
                </Box>
                <Stack
                    className="author-information"
                >
                    <Box>
                        <Typography
                            variant="subtitle1"
                            fontFamily={"Inter"}
                            fontWeight={500}
                            fontSize={{ mobile: "21px", }}
                            lineHeight={"normal"}
                            color={"var(--light-color)"}
                            textAlign={"left"}
                            whiteSpace={"normal"}
                        >
                            Akam Kuczyński
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Inter"}
                            fontWeight={400}
                            fontSize={{ mobile: "21px", }}
                            lineHeight={"normal"}
                            color={"var(--prospective-problem-description-color)"}
                            textAlign={"left"}
                            whiteSpace={"normal"}
                        >
                            CEO BLQ Digital Consulting
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </MissionWrapper>
    )
}