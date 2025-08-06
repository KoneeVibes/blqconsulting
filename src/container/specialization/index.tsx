import { Box, Stack, Typography } from "@mui/material";
import { SpecializationWrapper } from "./styled";
import { BaseButton } from "../../component/button/styled";
import { SouthEastIcon } from "../../asset";
import { useNavigate } from "react-router-dom";

export const Specialization = () => {
    const navigate = useNavigate();

    const handleNavigateToSolutionsPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        return navigate("/solution");
    };

    return (
        <SpecializationWrapper>
            <Stack
                className="text-area"
            >
                <Box
                    flex={0.3}
                    overflow={"hidden"}
                >
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Allrounder Monument Test"}
                        fontWeight={500}
                        fontSize={{ mobile: "18px" }}
                        lineHeight={"normal"}
                        color={"var(--light-color)"}
                        whiteSpace={"normal"}
                    >
                        SPECIALIZATION
                    </Typography>
                </Box>
                <Box
                    flex={0.7}
                    overflow={"hidden"}
                >
                    <Typography
                        variant="body1"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: "35px" }}
                        lineHeight={"normal"}
                        color={"var(--light-color)"}
                        whiteSpace={"normal"}
                    >
                        Our interdisciplinary expert teams made up of specialists from the worlds of engineering, software and digitalisation create solutions in the areas of Configure, Price & Quote, Product Information Management, Business To Business and Industry 4.0.
                    </Typography>
                </Box>
            </Stack>
            <Box
                component={"div"}
                className="view-solutions-button"
            >
                <BaseButton
                    disableElevation
                    variant="contained"
                    radius="0px"
                    colour="var(--dark-variant-color)"
                    bgcolor="var(--light-color)"
                    fontfamily="Inter"
                    fontsize="32px"
                    padding="calc(var(--basic-padding)/4) calc(var(--basic-padding)/2)"
                    endIcon={<SouthEastIcon />}
                    onClick={handleNavigateToSolutionsPage}
                >
                    <Typography
                        variant={"button"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        View Solutions
                    </Typography>
                </BaseButton>
            </Box>
        </SpecializationWrapper>
    )
}