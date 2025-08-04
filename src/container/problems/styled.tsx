import { Stack, styled } from "@mui/material";

export const ProblemsWrapper = styled(Stack)(() => {
    return {
        "& .title-area": {
            padding: "var(--basic-padding) calc(var(--basic-padding)/2)",
        },
        "& .carousel .slider": {
            gap: "calc(var(--flex-gap)/2)",
        },
        "& .carousel .slide": {
            flex: 1,
            "& .problem-stack": {
                height: "100%",
                gap: "calc(var(--flex-gap)/2)",
                padding: "calc(var(--basic-padding)/2)",
                borderLeft: "10px solid var(--primary-color)",
                backgroundColor: "var(--prospective-problem-bg-color)",
            },
        },
    }
})