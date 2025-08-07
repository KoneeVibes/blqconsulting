import { Stack, styled } from "@mui/material";

export const ProjectDetailWrapper = styled(Stack)(({ theme }) => {
    return {
        padding: "0 calc(var(--basic-padding)/2) calc(var(--basic-padding)/2)",
        gap: "calc(var(--flex-gap))",
        "& .non-dynamic-area": {
            flex: 0.3,
            overflow: "hidden",
            gap: "calc(var(--flex-gap)/2)",
            "& .favicon-box": {
                overflow: "hidden",
                "& img": {
                    width: "100%",
                    height: "auto",
                    cursor: "pointer",
                }
            },
        },
        "& .dynamic-area": {
            flex: 0.7,
            overflow: "hidden",
            gap: "calc(var(--flex-gap)/2)",
            "& .thumbnail-box": {
                overflow: "hidden",
                "& img": {
                    width: "100%",
                    height: "36.5rem",
                    cursor: "pointer",
                }
            },
            "& .image-box": {
                overflow: "hidden",
                "& img": {
                    width: "100%",
                    height: "19rem",
                    objectFit: "fill",
                },
            },
        },
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row"
        },
    }
})