import { Box, Stack, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { HowWeWorkWrapper } from "./styled";
import { workSteps } from "../../config/static";
import { ConnectorIcon } from "../../asset";
import { useEffect } from "react";

export const HowWeWork = () => {

    useEffect(() => {
        const steps = Array.from(document.getElementsByClassName("MuiStepLabel-iconContainer")) as HTMLElement[];
        steps.forEach((step) => {
            step.addEventListener("click", () => {
                window.scrollTo({
                    top: step.getBoundingClientRect().top + window.scrollY,
                    behavior: "smooth"
                });
            });
        });
    }, []);

    return (
        <HowWeWorkWrapper>
            <Stack
                className="heading-area"
            >
                <Box>
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Allrounder Monument Test"}
                        fontWeight={500}
                        fontSize={{ mobile: "18px" }}
                        lineHeight={"normal"}
                        color={"var(--primary-color)"}
                        whiteSpace={"normal"}
                    >
                        HOW DO WE WORK WITH CLIENTS?
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="h3"
                        fontFamily={"Inter"}
                        fontWeight={500}
                        fontSize={{ mobile: "35px", tablet: "42px", laptop: "54px" }}
                        lineHeight={"normal"}
                        color={"var(--light-color)"}
                        whiteSpace={"normal"}
                    >
                        Our solution implementation process follows 5 straightforward steps:
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="body1"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: "21px" }}
                        lineHeight={"normal"}
                        color={"var(--light-color)"}
                        whiteSpace={"normal"}
                    >
                        True to the lean approach and the power of learning from quickly verify the hypotheses and assumptions made. By drawing on experience from previous projects and our continuously evolving proprietary software platform, EXSO+
                    </Typography>
                </Box>
            </Stack>
            <Stepper
                orientation="vertical"
                connector={<ConnectorIcon style={{ marginLeft: "30px", height: "100px" }} />}
            >
                {workSteps.map((step, index) => (
                    <Step
                        key={index}
                        className="step-item"
                    >
                        <Box
                            component={"div"}
                            className="step-name"
                        >
                            <StepLabel
                                sx={{ display: "block" }}
                                StepIconComponent={() => (
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily={"Allrounder Monument Test"}
                                        fontWeight={500}
                                        fontSize={{ mobile: "18px" }}
                                        lineHeight={"normal"}
                                        color={"var(--primary-color)"}
                                        whiteSpace={"normal"}
                                        sx={{ cursor: "pointer" }}
                                    >
                                        {step.name}
                                    </Typography>
                                )}
                            />
                        </Box>
                        <Stack
                            key={index}
                            className="step-detail"
                        >
                            <Box
                                component={"div"}
                                className="color-stick"
                            />
                            <Box>
                                <Typography
                                    variant="subtitle2"
                                    fontFamily={"Inter"}
                                    fontWeight={500}
                                    fontSize={{ mobile: "22px", }}
                                    lineHeight={"normal"}
                                    color={"var(--dark-variant-color)"}
                                    textAlign={"left"}
                                    whiteSpace={"normal"}
                                >
                                    {step.title}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="body1"
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                    fontSize={{ mobile: "20px", }}
                                    lineHeight={"normal"}
                                    color={"var(--prospective-problem-description-color)"}
                                    textAlign={"left"}
                                    whiteSpace={"normal"}
                                >
                                    {step.description}
                                </Typography>
                            </Box>
                        </Stack>
                    </Step>
                ))}
            </Stepper>
        </HowWeWorkWrapper >
    )
}