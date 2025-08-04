import { Stack, styled } from "@mui/material";

export const LeadBlogsWrapper = styled(Stack)(({ theme }) => {
    return {
        padding: "calc(var(--basic-padding)/2)",
        "& .blog-cards": {
            gap: "calc(var(--flex-gap)/2)",
            padding: "calc(var(--basic-padding)/2) 0",
            "& .blog-card": {
                flex: 1,
                boxShadow: "none",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "calc(var(--basic-padding)/4)",
                "& .MuiCardContent-root": {
                    height: "100%",
                    padding: "calc(var(--basic-padding)/2) calc(var(--basic-padding)/4)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "calc(var(--flex-gap)/2)",
                    "&:last-child": {
                        paddingBottom: "calc(var(--basic-padding)/2) calc(var(--basic-padding)/4)",
                    }
                },
                "& .MuiCardActions-root": {
                    padding: "0 calc(var(--basic-padding)/4) calc(var(--basic-padding)/2)",
                },
            }
        },
        [theme.breakpoints.up("laptop")]: {
            "& .blog-cards": {
                flexDirection: "row",
            }
        },
    }
})