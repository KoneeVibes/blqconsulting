import { HeaderWrapper } from "./styled";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeaderPropsType } from "../../type/container.type";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Header: React.FC<HeaderPropsType> = ({
	isCarousel,
	headerImages,
	headerHeight,
	romanHeaderMessage,
	italizedHeaderMessage,
	headerBody,
	headerCTA,
}) => {
	return (
		<HeaderWrapper height={headerHeight}>
			{isCarousel ? (
				<Carousel
					showThumbs={false}
					showStatus={false}
					showIndicators={false}
					renderArrowPrev={(clickHandler, hasPrev) => {
						return (
							hasPrev && (
								<IconButton
									onClick={clickHandler}
									sx={{
										position: "absolute",
										left: 15,
										top: "50%",
										transform: "translateY(-50%)",
										zIndex: 2,
										cursor: "pointer",
										backgroundColor: "rgba(255, 255, 255, 0.8)",
										borderRadius: "50%",
										padding: "calc(var(--basic-padding)/8)",
										"&:hover": {
											backgroundColor: "var(--light-color)",
										},
									}}
								>
									<ArrowBackIcon sx={{ color: "var(--dark-color)" }} />
								</IconButton>
							)
						);
					}}
					renderArrowNext={(clickHandler, hasNext) => {
						return (
							hasNext && (
								<IconButton
									onClick={clickHandler}
									sx={{
										position: "absolute",
										right: 15,
										top: "50%",
										transform: "translateY(-50%)",
										zIndex: 2,
										cursor: "pointer",
										backgroundColor: "rgba(255, 255, 255, 0.8)",
										borderRadius: "50%",
										padding: "calc(var(--basic-padding)/8)",
										"&:hover": {
											backgroundColor: "var(--light-color)",
										},
									}}
								>
									<ArrowForwardIcon sx={{ color: "var(--dark-color)" }} />
								</IconButton>
							)
						);
					}}
				>
					{headerImages.map((img, index) => {
						return (
							<Box
								key={index}
								component={"div"}
								className="header-item carousel-item"
								sx={{
									backgroundImage: `url(${img})`,
									justifyContent: "center",
								}}
							>
								<Typography
									variant="h1"
									fontFamily={"Allrounder Monument Test"}
									fontWeight={500}
									fontSize={{
										mobile: "28px",
										tablet: "42px",
										laptop: "52px",
										desktop: "64px",
									}}
									lineHeight={"normal"}
									color={"var(--light-color)"}
									textAlign={"center"}
									whiteSpace={"normal"}
								>
									{romanHeaderMessage}{" "}
									<Typography
										component={"span"}
										fontFamily={"TeX Gyre Termes"}
										fontWeight={400}
										fontSize={{
											mobile: "32px",
											tablet: "40px",
											laptop: "60px",
											desktop: "80px",
											xl: "95px",
										}}
										lineHeight={"inherit"}
										color={"inherit"}
										textAlign={"inherit"}
										whiteSpace={"inherit"}
									>
										{italizedHeaderMessage}
									</Typography>
								</Typography>
							</Box>
						);
					})}
				</Carousel>
			) : (
				<Box
					component={"div"}
					className="header-item"
					sx={{ backgroundImage: `url(${headerImages[0]})` }}
				>
					<Stack
						overflow={"hidden"}
						gap={"calc(var(--flex-gap)/2)"}
						width={{ laptop: "80%", xl: "70%" }}
					>
						<Box>
							<Typography
								variant="h1"
								fontFamily={"Allrounder Monument Test"}
								fontWeight={500}
								fontSize={{
									mobile: "28px",
									tablet: "42px",
									laptop: "52px",
									desktop: "64px",
								}}
								lineHeight={"normal"}
								color={"var(--light-color)"}
								whiteSpace={"normal"}
								sx={{
									display: "-webkit-box",
									WebkitLineClamp: 3,
									WebkitBoxOrient: "vertical",
								}}
							>
								{romanHeaderMessage} <br />
								<Typography
									component={"span"}
									fontFamily={"TeX Gyre Termes"}
									fontWeight={400}
									fontSize={{
										mobile: "32px",
										tablet: "40px",
										laptop: "60px",
										desktop: "80px",
										xl: "95px",
									}}
									lineHeight={"inherit"}
									color={"var(--primary-color)"}
									whiteSpace={"inherit"}
								>
									{italizedHeaderMessage}
								</Typography>
							</Typography>
						</Box>
						{headerBody && (
							<Box>
								<Typography
									variant="body1"
									fontFamily={"Inter"}
									fontWeight={400}
									fontSize={{
										mobile: "24px",
										tablet: "28px",
										desktop: "32px",
									}}
									lineHeight={"normal"}
									color={"var(--light-color)"}
									whiteSpace={"normal"}
									sx={{
										display: "-webkit-box",
										WebkitLineClamp: 5,
										WebkitBoxOrient: "vertical",
										width: {
											miniTablet: "80%",
											tablet: "70%",
											desktop: "100%",
										},
									}}
								>
									{headerBody}
								</Typography>
							</Box>
						)}
						{headerCTA}
					</Stack>
				</Box>
			)}
		</HeaderWrapper>
	);
};
