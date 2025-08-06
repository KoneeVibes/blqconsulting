import { Stack, styled } from "@mui/material";

export const FoundationsWrapper = styled(Stack)(() => {
    return {
        gap: "calc(var(--flex-gap)/2)",
        padding: "calc(var(--basic-padding)/2) 0 var(--basic-padding)",
        "& .title-area": {
            padding: "0 calc(var(--basic-padding)/2) calc(var(--basic-padding)/2)",
        },
        "& .carousel .slider": {
            gap: "calc(var(--flex-gap)/2)",
        },
        "& .carousel .slide": {
            flex: 1,
            "& .foundation-stack": {
                height: "100%",
                gap: "calc(var(--flex-gap)/2)",
                padding: "calc(var(--basic-padding)/2)",
                borderLeft: "10px solid var(--primary-color)",
                backgroundColor: "var(--prospective-problem-bg-color)",
            },
        },
    }
})