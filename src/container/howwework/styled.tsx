import { Stack, styled } from "@mui/material";

export const HowWeWorkWrapper = styled(Stack)(({ theme }) => {
    return {
        gap: "calc(var(--flex-gap))",
        padding: "var(--basic-padding) calc(var(--basic-padding)/2)",
        "& .heading-area": {
            flex: 1,
            overflow: "hidden",
            gap: "calc(var(--flex-gap)/2)",
        },
        "& .MuiStepper-root": {
            flex: 1,
            overflow: "hidden",
            "& .step-item": {
                display: "flex",
                alignItems: "center",
                gap: "calc(var(--flex-gap)/16)",
                overflow: "hidden",
                "& .step-name": {
                    flex: "0 1 auto",
                    overflow: "hidden",
                },
                "& .step-detail": {
                    padding: "calc(var(--basic-padding)/3)",
                    background: "var(--light-color)",
                    gap: "calc(var(--flex-gap)/2)",
                    flex: 1,
                    overflow: "hidden",
                    position: "relative",
                    "& .color-stick": {
                        padding: "calc(var(--basic-padding)/4)",
                        backgroundColor: "var(--primary-color)",
                        position: "absolute",
                        top: "50%",
                        left: "calc(var(--basic-padding) * -0.5)",
                        transform: "translate(50%, -50%)",
                        display: "none",
                    },
                },
            },
        },
        [theme.breakpoints.up(500)]: {
            "& .MuiStepper-root": {
                "& .step-item": {
                    gap: "calc(var(--flex-gap))",
                    "& .step-detail": {
                        overflow: "unset",
                        padding: "calc(var(--basic-padding)/2)",
                        "& .color-stick": {
                            display: "block"
                        },
                    },
                },
            },
        },
        [theme.breakpoints.up("desktop")]: {
            flexDirection: "row"
        },
    }
})