import { Stack, styled } from "@mui/material";

export const SolutionsListWrapper = styled(Stack)(() => {
    return {
        gap: "calc(var(--flex-gap)/2)",
        "& .solutions-list-upper-section": {
            padding: "calc(var(--basic-padding)/2)",
        },
        "& .carousel .slider": {
            gap: "calc(var(--flex-gap)/2)",
        },
        "& .carousel .slide": {
            flex: 1,
            "& .solution-card": {
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                minHeight: "30.0625rem",
                height: "100%",
                borderRadius: "0px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                "& .MuiCardContent-root": {
                    padding: "calc(var(--basic-padding)/2)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "calc(var(--flex-gap)/2)",
                    "&:last-child": {
                        paddingBottom: "calc(var(--basic-padding)/2)",
                    }
                },
            },
        },
        "& .view-solutions-button": {
            padding: "calc(var(--basic-padding)/2)",
            display: "flex",
            justifyContent: "flex-end",
            "& button": {
                gap: "calc(var(--flex-gap)/8)",
            }
        }
    }
})