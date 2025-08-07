import { Stack, styled } from "@mui/material";

export const ProjectsWrapper = styled(Stack)(({ theme }) => {
    return {
        gap: "calc(var(--flex-gap)/2)",
        padding: "0 calc(var(--basic-padding)/2) calc(var(--basic-padding)/2)",
        "& .projects": {
            gap: "calc(var(--flex-gap)/2)",
        },
        "& .project": {
            gap: "calc(var(--flex-gap)/2)",
            justifyContent: "space-between",
            "& .project-thumbnail": {
                flex: 1,
                overflow: "hidden",
                "& img": {
                    width: "100%",
                    height: "30rem",
                    objectFit: "fill",
                },
            },
            "& .project-detail": {
                flex: 1,
                overflow: "hidden",
                gap: "calc(var(--flex-gap)/2)",
                justifyContent: "space-between",
                "& .tag-stack": {
                    flexDirection: "row",
                    gap: "calc(var(--flex-gap)/4)",
                    "& .tag-box": {
                        borderRadius: "20px",
                        border: "1px solid var(--tag-border-color)",
                        padding: "calc(var(--basic-padding)/8) calc(var(--basic-padding)/4)",
                    },
                },
                "& .items-list": {
                    paddingInline: 0,
                    listStylePosition: "inside",
                    marginBlock: 0,
                    "& li": {
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "normal",
                        color: "var(--light-color)",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                    }
                },
            },
        },
        [theme.breakpoints.up("laptop")]: {
            "& .heading": {
                width: "70%",
            },
            "& .project": {
                flexDirection: "row",
                gap: "calc(var(--flex-gap))",
                "& .project-thumbnail": {
                    "& img": {
                        height: "100%",
                    },
                },
            },
        },
    }
})