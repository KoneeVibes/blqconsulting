import { Box, styled } from "@mui/material";

export const HeaderWrapper = styled(Box)<{ height?: string }>(({ theme, height }) => {
    return {
        "& .header-item": {
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            height: height || "36.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "calc(var(--basic-padding)/2)"
        }
    }
})