import { Stack, styled } from "@mui/material";

export const WhereAreWeHeadingWrapper = styled(Stack)(({ theme }) => {
    return {
        gap: "calc(var(--flex-gap))",
        padding: "calc(var(--basic-padding)/2)",
        "& .heading-area": {
            flex: 1,
            overflow: "hidden",
        },
        "& .details-area": {
            flex: 1,
            overflow: "hidden",
            gap: "calc(var(--flex-gap)/2)",
        },
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row"
        },
    }
})