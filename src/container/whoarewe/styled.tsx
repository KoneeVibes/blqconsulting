import { Stack, styled } from "@mui/material";

export const WhoAreWeWrapper = styled(Stack)(({ theme }) => {
    return {
        "& .thumbnail-area": {
            flex: 1,
            overflow: "hidden",
            "& img": {
                width: "100%",
                height: "36.5rem",
                objectFit: "fill",
            },
        },
        "& .details-area": {
            flex: 1,
            overflow: "hidden",
            backgroundColor: "var(--prospective-problem-bg-color)",
            "& .detail-item": {
                padding: "calc(var(--basic-padding)/2)",
            },
        },
        "& .description-area:last-of-type": {
            paddingBottom: "var(--basic-padding)",
        },
        [theme.breakpoints.up("tablet")]: {
            flexDirection: "row",
            "& .thumbnail-area": {
                "& img": {
                    height: "100%",
                },
            },
        },
    }
})