import { Box, Stack, Typography } from "@mui/material";
import { WhoAreWeWrapper } from "./styled";
import whoAreWeThumbnail from "../../asset/image/who-are-we-thumbnail.png";

export const WhoAreWe = () => {
    return (
        <WhoAreWeWrapper>
            <Box
                component={"div"}
                className={"thumbnail-area"}
            >
                <img
                    src={whoAreWeThumbnail}
                    alt="who-are-we-thumbnail"
                />
            </Box>
            <Stack
                className="details-area"
            >
                <Box
                    component={"div"}
                    className="detail-item subtitle-area"
                >
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Allrounder Monument Test"}
                        fontWeight={500}
                        fontSize={{ mobile: "18px" }}
                        lineHeight={"normal"}
                        color={"var(--primary-color)"}
                        whiteSpace={"normal"}
                    >
                        WHO ARE WE?
                    </Typography>
                </Box>
                <Box
                    component={"div"}
                    className="detail-item title-area"
                >
                    <Typography
                        variant="h3"
                        fontFamily={"DM Sans"}
                        fontWeight={500}
                        fontSize={{ mobile: "27px", tablet: "36px", laptop: "45px", desktop: "51px" }}
                        lineHeight={"normal"}
                        color={"var(--dark-variant-color)"}
                        whiteSpace={"normal"}
                    >
                        Out of a need to explore the world and technology
                    </Typography>
                </Box>
                <Box
                    component={"div"}
                    className="detail-item description-area"
                >
                    <Typography
                        variant="body1"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: "20px", }}
                        lineHeight={"normal"}
                        color={"var(--dark-variant-color)"}
                        whiteSpace={"normal"}
                    >
                        Our company was born out of a fusion of technological passion and the desire to explore the world. We are a team that not only shares work but also embarks on joint adventures both inside and outside the office.
                    </Typography>
                </Box>
                <Box
                    component={"div"}
                    className="detail-item description-area"
                >
                    <Typography
                        variant="body1"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: "20px", }}
                        lineHeight={"normal"}
                        color={"var(--dark-variant-color)"}
                        whiteSpace={"normal"}
                    >
                        Since our establishment in early 2009, we have been consistently delivering specialized engineering services in design, IT, and automation. With a firm belief in technology's ability to have a "human face", we embrace every venture into the unknown as a remarkable opportunity to foster growth and make a meaningful impact on the world.
                    </Typography>
                </Box>
            </Stack>
        </WhoAreWeWrapper>
    )
}