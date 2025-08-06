import { Stack, styled } from "@mui/material";

export const FooterWrapper = styled(Stack)(({ theme }) => {
    return {
        "& .top-layer": {
            flexDirection: "column",
            gap: "calc(var(--flex-gap)/2)",
            justifyContent: "space-between",
            padding: "calc(var(--basic-padding)/2)",
            marginTop: "calc(var(--basic-margin)/2)",
            borderTop: "1px solid var(--footer-border-color)",
        },
        "& .middle-layer": {
            flexDirection: "column",
            gap: "calc(var(--flex-gap)/2)",
            justifyContent: "space-between",
            padding: "calc(var(--basic-padding)/2)",
            "& .nav-links": {
                gap: "calc(var(--flex-gap)/4)",
            }
        },
        "& .bottom-layer": {
            flexDirection: "column",
            gap: "calc(var(--flex-gap)/2)",
            justifyContent: "space-between",
            padding: "calc(var(--basic-padding)/2) calc(var(--basic-padding)/2) calc(var(--basic-padding)/1)",
        },
        "& a": {
            textDecoration: "none",
        },
        "& .favicon-box": {
            overflow: "hidden",
            "& img": {
                width: "100%",
                height: "auto",
            }
        },
        [theme.breakpoints.up(600)]: {
            "& .favicon-box": {
                "& img": {
                    width: "auto",
                }
            },
        },
        [theme.breakpoints.up("tablet")]: {
            "& .top-layer": {
                flexDirection: "row",
                alignItems: "center",
            },
        },
        [theme.breakpoints.up("laptop")]: {
            "& .middle-layer": {
                flexDirection: "row",
                "& .nav-links": {
                    flexDirection: "row",
                    alignItems: "flex-end",
                }
            },
            "& .bottom-layer": {
                flexDirection: "row",
                alignItems: "flex-end",
            },
        }
    }
})