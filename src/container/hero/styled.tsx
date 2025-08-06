import { Stack, styled } from "@mui/material";

export const HeroWrapper = styled(Stack)(({ theme }) => {
    return {
        gap: "calc(var(--flex-gap)/2)",
        padding: "calc(var(--basic-padding)/2)",
        "& .heading": {
            gap: "calc(var(--flex-gap)/2)",
        },
        "& .thumbnail": {
            overflow: "hidden",
            "& img": {
                width: "100%",
                height: "36.5rem",
                objectFit: "fill",
            },
        },
        [theme.breakpoints.up("laptop")]: {
            "& .heading": {
                width: "85%",
            },
            "& .thumbnail": {
                "& img": {
                    height: "100%",
                },
            },
        },
    }
})