import { Box, Stack, Typography } from "@mui/material";
import { VisionWrapper } from "./styled";
import visionBanner from "../../asset/image/vision-banner.png";
import { visionStats } from "../../config/static";
import CountUp from "react-countup";

export const Vision = () => {
    return (
        <VisionWrapper>
            <Box
                component={"div"}
                className={"vision-banner"}
            >
                <img
                    src={visionBanner}
                    alt="logo"
                />
            </Box>
            <Stack
                className="vision-details"
            >
                <Box
                    component={"div"}
                    className="vision-details-item"
                >
                    <Typography
                        variant="h2"
                        fontFamily={"TeX Gyre Termes"}
                        fontWeight={400}
                        fontSize={{ mobile: "24px", tablet: "32px", laptop: "48px" }}
                        lineHeight={"normal"}
                        color={"var(--light-color)"}
                        whiteSpace={"normal"}
                    >
                        Our Vision
                    </Typography>
                </Box>
                <Box
                    component={"div"}
                    className="vision-details-item"
                >
                    <Typography
                        variant="body1"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: "24px", tablet: "32px", laptop: "40px" }}
                        lineHeight={"normal"}
                        color={"var(--light-color)"}
                        whiteSpace={"normal"}
                    >
                        Skillful use of new technologies can driven business growth and transformation, and for many is the only chance to establish their presence in the world of the future...
                    </Typography>
                </Box>
                <Stack
                    className="vision-details-item vision-stats"
                >
                    {Object.entries(visionStats).map(([key, val], index) => {
                        return (
                            <Stack
                                key={index}
                                className="vision-stats-item"
                            >
                                <Box>
                                    <CountUp
                                        end={val >= 1000 ? val / 1000 : val}
                                        enableScrollSpy={true}
                                        separator=""
                                        decimals={val >= 1000 ? 1 : 0}
                                        suffix={val >= 1000 ? "k" : ""}
                                    >
                                        {({ countUpRef }) => (
                                            <Typography
                                                ref={countUpRef}
                                                variant="h3"
                                                fontFamily={"TeX Gyre Termes"}
                                                fontWeight={400}
                                                fontSize={{ mobile: 25, tablet: 40, laptop: 45, desktop: 50 }}
                                                lineHeight={"normal"}
                                                color={"var(--light-color)"}
                                            />
                                        )}
                                    </CountUp>
                                </Box>
                                <Box>
                                    <Typography
                                        variant="body1"
                                        fontFamily={"Inter"}
                                        fontWeight={400}
                                        fontSize={{ mobile: "21px" }}
                                        lineHeight={"normal"}
                                        color={"var(--light-color)"}
                                        whiteSpace={"normal"}
                                    >
                                        {key}
                                    </Typography>
                                </Box>
                            </Stack>
                        )
                    })}
                </Stack>
            </Stack>
        </VisionWrapper >
    )
}