import { Stack, styled } from "@mui/material";

export const SpecializationWrapper = styled(Stack)(({ theme }) => {
    return {
        background: "var(--grey-color)",
        "& .text-area": {
            gap: "calc(var(--flex-gap)/2)",
            padding: "var(--basic-padding) calc(var(--basic-padding)/2)",
        },
        "& .view-solutions-button": {
            display: "flex",
            justifyContent: "flex-end",
            "& button": {
                gap: "calc(var(--flex-gap)/8)",
            }
        },
        [theme.breakpoints.up("laptop")]: {
            "& .text-area": {
                flexDirection: "row",
            },
        },
    }
})