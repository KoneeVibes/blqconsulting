import { Box, Stack, Typography } from "@mui/material";
import { FooterWrapper } from "./styled";
import { footerInfo, navLinks, socialMedia } from "../../config/static";
import { HashLink } from "react-router-hash-link";
import logo from "../../asset/image/logo-white-text-variant.svg";

export const Footer = () => {
    return (
        <FooterWrapper>
            <Stack
                className="top-layer"
            >
                <Box>
                    <Typography
                        variant="h2"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: 30, xl: 50 }}
                        lineHeight={"normal"}
                        color="var(--light-color)"
                        whiteSpace={"normal"}
                    >
                        Start Your Journey to <Typography
                            component={"span"}
                            fontFamily={"TeX Gyre Termes"}
                            fontWeight={"inherit"}
                            fontSize={{ mobile: 35, xl: 60 }}
                            fontStyle={"italic"}
                            lineHeight={"inherit"}
                            color="var(--off-dark-color)"
                            whiteSpace={"inherit"}
                        >
                            The Digital Future
                        </Typography>
                    </Typography>
                </Box>
                <Stack
                    direction={"row"}
                >
                    {socialMedia.map((media, index) => (
                        <Box
                            key={index}
                            overflow={"hidden"}
                        >
                            {media.icon}
                        </Box>
                    ))}
                </Stack>
            </Stack>
            <Stack
                className="middle-layer"
            >
                <Stack
                    direction={{ mobile: "column", tablet: "row" }}
                    gap={"calc(var(--flex-gap)/2)"}
                >
                    {Object.entries(footerInfo).map(([sectionTitle, items], index) => (
                        <Stack
                            key={index}
                            gap={"calc(var(--flex-gap)/2)"}
                        >
                            <Box>
                                <Typography
                                    variant="h3"
                                    fontFamily="Allrounder Monument Test"
                                    fontWeight={400}
                                    fontSize={{ mobile: 17 }}
                                    lineHeight="normal"
                                    whiteSpace="normal"
                                    color="var(--off-white-color)"
                                >
                                    {sectionTitle}
                                </Typography>
                            </Box>
                            <Stack
                                gap={"calc(var(--flex-gap)/8)"}
                            >
                                {items.map((item, subIndex) => (
                                    <Box key={subIndex}>
                                        <Typography
                                            variant="subtitle1"
                                            fontFamily="Inter"
                                            fontWeight={400}
                                            fontSize={{ mobile: 20 }}
                                            lineHeight="normal"
                                            whiteSpace="normal"
                                            color="var(--light-color)"
                                        >
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
                <Stack
                    className="nav-links"
                >
                    {navLinks.map((navLink, index) => {
                        return (
                            <HashLink
                                key={index}
                                to={navLink.url}
                                smooth={true}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                    fontSize={20}
                                    lineHeight={"normal"}
                                    sx={{
                                        cursor: "pointer",
                                        textTransform: "capitalize",
                                        color: { mobile: "var(--light-color)" },
                                    }}
                                >
                                    {navLink.name}
                                </Typography>
                            </HashLink>
                        )
                    })}
                </Stack>
            </Stack>
            <Stack
                className="bottom-layer"
            >
                <Stack
                    gap={"calc(var(--flex-gap)/2)"}
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
                    <Stack
                        direction={{ mobile: "column", tablet: "row" }}
                        gap={"calc(var(--flex-gap)/2)"}
                    >
                        <Box>
                            <Typography
                                variant="subtitle1"
                                fontFamily="Inter"
                                fontWeight={400}
                                fontSize={{ mobile: 18 }}
                                lineHeight="normal"
                                whiteSpace="normal"
                                color="var(--off-white-color)"
                            >
                                © 2024 Expert Solutions Ltd.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="subtitle1"
                                fontFamily="Inter"
                                fontWeight={400}
                                fontSize={{ mobile: 18 }}
                                lineHeight="normal"
                                whiteSpace="normal"
                                color="var(--off-white-color)"
                            >
                                Privacy policy
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
                <Box>
                    <Typography
                        variant="subtitle1"
                        fontFamily="Inter"
                        fontWeight={400}
                        fontSize={{ mobile: 18 }}
                        lineHeight="normal"
                        whiteSpace="normal"
                        color="var(--off-white-color)"
                    >
                        Design & Development: Sparklabs
                    </Typography>
                </Box>
            </Stack>
        </FooterWrapper >
    )
}