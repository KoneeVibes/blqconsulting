import { Stack, styled } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context";

export const NavigationWrapper = styled(Stack)(({ theme }) => {
    const { openMenu } = useContext(AppContext);
    return {
        background: "var(--light-color)",
        gap: "calc(var(--flex-gap)/4)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "calc(var(--basic-padding)/2)",
        "& .favicon-box": {
            overflow: "hidden",
            "& img": {
                width: "100%",
                height: "auto",
                cursor: "pointer",
            }
        },
        "& .nav-links": {
            display: openMenu ? "flex" : "none",
            gap: "calc(var(--flex-gap)/4)",
            position: "absolute",
            top: "7.6375rem",
            left: 0,
            right: 0,
            padding: "calc(var(--basic-padding)/2)",
            background: "var(--dark-variant-color)",
            height: "-webkit-fill-available",
            zIndex: 10,
        },
        "& a": {
            textDecoration: "none",
        },
        "& .menu-button-box": {
            border: "2px solid var(--primary-color)",
            borderRadius: "8px",
            padding: "calc(var(--basic-padding)/8)",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
        },
        "& .contact-button": {
            display: openMenu ? "flex" : "none",
            justifyContent: "center",
            position: "absolute",
            top: "24.75rem",
            left: 0,
            right: 0,
            padding: "0 calc(var(--basic-padding)/2) var(--basic-padding)",
            overflow: "hidden",
        },
        [theme.breakpoints.up("laptop")]: {
            "& .nav-links": {
                display: "flex",
                flexDirection: "row",
                position: "static",
                padding: "calc(var(--basic-padding)/6) calc(var(--basic-padding)/3)",
                height: "auto",
                borderRadius: "30px",
                background: "var(--nav-items-bg-color)",
            },
            "& .menu-button-box": {
                display: "none",
            },
            "& .contact-button": {
                display: "block",
                position: "static",
                padding: 0,
            }
        }
    }
})