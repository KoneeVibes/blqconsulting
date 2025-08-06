import { Grid, styled } from "@mui/material";

export const TeamMembersWrapper = styled(Grid)(({ theme }) => {
    return {
        padding: "0 calc(var(--basic-padding)/2) calc(var(--basic-padding)/2)",
        "& .image-box": {
            overflow: "hidden",
            "& img": {
                width: "100%",
                height: "476px",
                objectFit: "fill",
            },
        },
    }
})