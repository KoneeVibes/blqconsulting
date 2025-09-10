import { Header } from "../../container/header";
import { AppLayout } from "../../container/layout";
import { RealEstateWrapper } from "./styled";
import { headerImages } from "../../config/static";
import { Box, Typography } from "@mui/material";
import { BaseButton } from "../../component/button/styled";
import { SetApart } from "../../container/setapart";
import { RealEstateOffering } from "../../container/realestateofferings";
import { Testimonial } from "../../container/testimonial";
import { LeadBlogs } from "../../container/leadblogs";

export const RealEstate = () => {
	const handleGetStartedClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
	};

	return (
		<AppLayout>
			<RealEstateWrapper>
				<Header
					isCarousel={false}
					headerImages={headerImages["real-estate"]}
					romanHeaderMessage={"Your Trusted Partner in"}
					italizedHeaderMessage={"Real Estate Solutions"}
					headerBody="From property acquisition to investment advisory, we make real estate simple, transparent, and profitable."
					headerCTA={
						<Box overflow={"hidden"}>
							<BaseButton
								disableElevation
								variant="contained"
								onClick={handleGetStartedClick}
							>
								<Typography
									variant={"button"}
									fontFamily={"inherit"}
									fontWeight={"inherit"}
									fontSize={{ mobile: 15, laptop: 12, desktop: 15 }}
									lineHeight={"inherit"}
									color={"inherit"}
									textTransform={"inherit"}
								>
									Get Started Today
								</Typography>
							</BaseButton>
						</Box>
					}
				/>
				<SetApart
					keyDifferential={
						"We’re more than just a real estate company—we are your strategic partner in property ownership, investment, and management. Whether you’re an individual looking for your dream home, a business seeking prime office space, or an investor exploring opportunities, our team delivers solutions tailored to your needs."
					}
				/>
				<RealEstateOffering />
				<Testimonial />
				<LeadBlogs />
			</RealEstateWrapper>
		</AppLayout>
	);
};
