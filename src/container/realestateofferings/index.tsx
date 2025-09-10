import {
	Box,
	Card,
	CardContent,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { RealEstateOfferingsWrapper } from "./styled";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { realEstateDifferentials, realEstateSolutions } from "../../config/static";

export const RealEstateOffering = () => {
	const matches = useMediaQuery("(min-width:1024px)");

	return (
		<RealEstateOfferingsWrapper>
			<Box component={"div"} className="solutions-list-upper-section">
				<Typography
					variant="h2"
					fontFamily={"Inter"}
					fontWeight={500}
					fontSize={{
						mobile: "32px",
						tablet: "40px",
						laptop: "60px",
						desktop: "70px",
					}}
					lineHeight={"normal"}
					color={"var(--light-color)"}
					whiteSpace={"normal"}
				>
					What We{" "}
					<Typography
						component={"span"}
						fontFamily={"TeX Gyre Termes"}
						fontWeight={400}
						fontSize={"inherit"}
						lineHeight={"inherit"}
						color={"var(--light-color-variant)"}
						whiteSpace={"inherit"}
					>
						Offer
					</Typography>
				</Typography>
			</Box>
			<Carousel
				autoPlay={true}
				autoFocus={true}
				infiniteLoop={true}
				interval={2000}
				emulateTouch={true}
				showIndicators={false}
				showThumbs={false}
				showArrows={false}
				showStatus={false}
				centerMode={true}
				centerSlidePercentage={matches ? 40 : 100}
			>
				{realEstateSolutions.map((solution, index) => {
					return (
						<Card
							key={index}
							className="solution-card"
							sx={{ backgroundImage: `url(${solution.bg})` }}
						>
							<CardContent>
								<Typography
									variant="h3"
									fontFamily={"TeX Gyre Termes"}
									fontWeight={400}
									fontSize={{ mobile: "24px", tablet: "35px", laptop: "50px" }}
									lineHeight={"normal"}
									color={"var(--primary-color)"}
									textAlign={"left"}
									whiteSpace={"normal"}
								>
									{solution.italizedTitle}{" "}
									<Typography
										component={"span"}
										fontFamily={"Allrounder Monument Test"}
										fontWeight={500}
										fontSize={{ mobile: "24px", tablet: "35px" }}
										lineHeight={"inherit"}
										color={"var(--light-color)"}
										textAlign={"inherit"}
										whiteSpace={"inherit"}
									>
										{solution.romanTitle}
									</Typography>
								</Typography>
								<Typography
									variant="body1"
									fontFamily={"Inter"}
									fontWeight={400}
									fontSize={{ mobile: "15px" }}
									lineHeight={"normal"}
									color={"var(--light-color)"}
									textAlign={"left"}
									whiteSpace={"normal"}
								>
									{solution.description}
								</Typography>
							</CardContent>
						</Card>
					);
				})}
			</Carousel>
			<Stack className="bottom-stack">
				{realEstateDifferentials.map((distinguisher, index) => {
					return (
						<Stack
							key={index}
							className="bottom-stack-item"
							sx={{ background: distinguisher.bgColor }}
						>
							<Box overflow={"hidden"}>
								<img src={distinguisher.icon} alt="distinguisher-icon" />
							</Box>
							<Box>
								<Typography
									variant="h3"
									fontFamily={"Inter"}
									fontWeight={500}
									fontSize={{ mobile: "35px" }}
									lineHeight={"normal"}
									color={"var(--primary-color)"}
									whiteSpace={"normal"}
									marginBlockEnd={"calc(var(--basic-margin)/2)"}
								>
									{distinguisher.romanTitle}{" "}
									<Typography
										component={"span"}
										fontFamily={"TeX Gyre Termes"}
										fontWeight={400}
										fontSize={"inherit"}
										lineHeight={"inherit"}
										color={"inherit"}
										whiteSpace={"inherit"}
									>
										{distinguisher.italizedTitle}
									</Typography>
								</Typography>
								<Typography
									variant="body1"
									fontFamily={"Inter"}
									fontWeight={400}
									fontSize={{ mobile: "21px" }}
									lineHeight={"normal"}
									color={"var(--light-color)"}
									whiteSpace={"normal"}
								>
									{distinguisher.body}
								</Typography>
							</Box>
						</Stack>
					);
				})}
			</Stack>
		</RealEstateOfferingsWrapper>
	);
};
