import { Stack, styled } from "@mui/material";

export const SetApartWrapper = styled(Stack)(({ theme }) => {
    return {
        gap: "calc(var(--flex-gap)/2)",
        "& .top-stack": {
            padding: "calc(var(--basic-padding)/2)",
            justifyContent: "space-between",
            gap: "calc(var(--flex-gap)/2)",
            "& .top-stack-item": {
                flex: 1,
                overflow: "hidden",
            },
        },
        "& .bottom-stack": {
            "& .bottom-stack-item": {
                flex: 1,
                overflow: "hidden",
                padding: "calc(var(--basic-padding)/2)",
                gap: "calc(var(--flex-gap))",
            },
        },
        [theme.breakpoints.up("tablet")]: {
            "& .top-stack": {
                flexDirection: "row",
            },
        },
        [theme.breakpoints.up("laptop")]: {
            "& .top-stack": {
                gap: "calc(var(--flex-gap))",
            },
            "& .bottom-stack": {
                flexDirection: "row"
            },
        },
    }
})