import { Stack, styled } from "@mui/material";

export const SpecializationWrapper = styled(Stack)(({ theme }) => {
    return {
        background: "var(--grey-color)",
        position: "relative",
        top: "calc(var(--flex-gap) / -2)",
        "& .text-area": {
            gap: "calc(var(--flex-gap)/2)",
            padding: "var(--basic-padding) calc(var(--basic-padding)/2)",
        },
        "& .view-solutions-button": {
            display: "flex",
            justifyContent: "flex-end",
            "& button": {
                width: "100%",
                gap: "calc(var(--flex-gap)/8)",
            }
        },
        [theme.breakpoints.up("miniTablet")]: {
            "& .view-solutions-button": {
                "& button": {
                    width: "auto",
                }
            },
        },
        [theme.breakpoints.up("laptop")]: {
            "& .text-area": {
                flexDirection: "row",
            },
        },
    }
})