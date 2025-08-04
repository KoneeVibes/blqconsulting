import { Stack, styled } from "@mui/material";

export const VisionWrapper = styled(Stack)(({ theme }) => {
    return {
        "& .vision-banner": {
            overflow: "hidden",
            flex: 1,
            "& img": {
                width: "100%",
                height: "36.5rem",
                objectFit: "fill",
            }
        },
        "& .vision-details": {
            flex: 1,
            overflow: "hidden",
            gap: "calc(var(--flex-gap)/2)",
            justifyContent: "space-between",
            backgroundColor: "var(--grey-color)",
            padding: "calc(var(--basic-padding)) 0",
            "& .vision-details-item": {
                padding: "0 calc(var(--basic-padding)/2)",
            },
            "& .vision-stats": {
                gap: "calc(var(--flex-gap)/2)",
                "& .vision-stats-item": {
                    flex: 1,
                    overflow: "hidden",
                },
            }
        },
        [theme.breakpoints.up("tablet")]: {
            flexDirection: "row",
            "& .vision-banner": {
                "& img": {
                    width: "100%",
                    height: "100%"
                }
            },
            "& .vision-details": {
                gap: "0px",
                justifyContent: "space-evenly",
                padding: "0px",
                "& .vision-details-item": {
                    padding: "calc(var(--basic-padding))",
                },
                "& .vision-stats": {
                    flexDirection: "column",
                    justifyContent: "space-between",
                }
            }
        },
        [theme.breakpoints.up("desktop")]: {
            "& .vision-details": {
                "& .vision-stats": {
                    flexDirection: "row",
                }
            }
        },
    }
})