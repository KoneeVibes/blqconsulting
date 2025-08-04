import { Stack, styled } from "@mui/material";

export const TestimonialWrapper = styled(Stack)(({ theme }) => {
    return {
        margin: "calc(var(--basic-margin)/2)",
        padding: "calc(var(--basic-padding)/2)",
        background: "var(--light-color)",
        gap: "calc(var(--flex-gap)/2)",
        "& .carousel .slide": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& .testimonial-item": {
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
                boxShadow: "none",
                border: "1px solid var(--box-shadow-color)",
                width: "100%",
                "& .MuiCardContent-root": {
                    padding: "calc(var(--basic-padding)/2)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "calc(var(--flex-gap)/2)",
                    "&:last-child": {
                        paddingBottom: "calc(var(--basic-padding)/2)",
                    }
                },
                "& .star-stack": {
                    flexDirection: "row",
                    gap: "calc(var(--flex-gap)/8)",
                    alignItems: "center",
                    justifyContent: "center",
                },
            },
        },
        [theme.breakpoints.up("tablet")]: {
            "& .carousel .slide": {
                "& .testimonial-item": {
                    width: "75%",
                    "& .MuiCardContent-root": {
                        padding: "var(--basic-padding)",
                        "&:last-child": {
                            paddingBottom: "var(--basic-padding)",
                        }
                    },
                },
            },
        }
    }
})