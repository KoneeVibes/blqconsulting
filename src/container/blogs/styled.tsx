import { Stack, styled } from "@mui/material";

export const BlogsWrapper = styled(Stack)(() => {
    return {
        gap: "calc(var(--flex-gap)/2)",
        padding: "calc(var(--basic-padding)/2)",
        borderTop: "1px solid var(--footer-border-color)",
        "& .heading": {
            flexDirection: "row",
            "& .dot-icon": {
                overflow: "hidden"
            },
            "& .title": {
                flex: "1 1 auto",
                overflow: "hidden"
            },
        },
        "& .blog-stack": {
            gap: "calc(var(--flex-gap)/2)",
            height: "100%",
            justifyContent: "space-between",
            "& .image-box": {
                cursor: "pointer",
                overflow: "hidden",
                "& img": {
                    width: "100%",
                    height: "19rem",
                    objectFit: "fill",
                },
            },
        },
    }
})