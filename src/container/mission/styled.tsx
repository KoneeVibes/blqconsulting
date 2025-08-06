import { Stack, styled } from "@mui/material";

export const MissionWrapper = styled(Stack)(({ theme }) => {
    return {
        gap: "calc(var(--flex-gap)/2)",
        padding: "0 calc(var(--basic-padding)/2) var(--basic-padding)",
        "& .mission-persona": {
            flex: 1,
            overflow: "hidden",
            "& img": {
                width: "100%",
                height: "36.5rem",
                objectFit: "fill",
            }
        },
        "& .mission-statement": {
            flex: 1,
            overflow: "hidden",
            gap: "calc(var(--flex-gap)/2)",
            justifyContent: "space-between",
            "& .author-information": {
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "baseline",
                gap: "calc(var(--flex-gap)/2)",
            },
        },
        [theme.breakpoints.up("tablet")]: {
            flexDirection: "row",
            gap: "calc(var(--flex-gap))",
            "& .mission-persona": {
                "& img": {
                    height: "100%",
                }
            },
        },
    }
})