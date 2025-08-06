import { Box, Stack, Typography } from "@mui/material";
import { WhereAreWeHeadingWrapper } from "./styled";
import { organizationalCharacter } from "../../config/static";

export const WhereAreWeHeading = () => {
    return (
        <WhereAreWeHeadingWrapper>
            <Box
                component={"div"}
                className="heading-area"
            >
                <Typography
                    variant="subtitle1"
                    fontFamily={"Allrounder Monument Test"}
                    fontWeight={500}
                    fontSize={{ mobile: "18px" }}
                    lineHeight={"normal"}
                    color={"var(--primary-color)"}
                    whiteSpace={"normal"}
                    marginBlockEnd={"calc(var(--basic-margin)/2)"}
                >
                    WHERE ARE WE HEADING?
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: "20px", }}
                    lineHeight={"normal"}
                    color={"var(--light-color)"}
                    whiteSpace={"normal"}
                >
                    Inspired by the latest trends in technology development and organisational culture, we strive to be a team that manages itself and successively improves its competences in order to create innovative products, services, and new businesses.
                </Typography>
            </Box>
            <Stack
                className="details-area"
            >
                {organizationalCharacter.map((character, index) => {
                    return (
                        <Box
                            key={index}
                            component={"div"}
                            className="detail-item"
                        >
                            <Typography
                                variant="h3"
                                fontFamily={"Inter"}
                                fontWeight={400}
                                fontSize={{ mobile: "30px", }}
                                lineHeight={"normal"}
                                color={"var(--light-color)"}
                                whiteSpace={"normal"}
                                marginBlockEnd={"calc(var(--basic-margin)/4)"}
                            >
                                {character.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                fontFamily={"Inter"}
                                fontWeight={400}
                                fontSize={{ mobile: "20px" }}
                                lineHeight={"normal"}
                                color={"var(--detail-item-text-color)"}
                                whiteSpace={"normal"}
                            >
                                {character.body}
                            </Typography>
                        </Box>
                    )
                })}
            </Stack>
        </WhereAreWeHeadingWrapper>
    )
}