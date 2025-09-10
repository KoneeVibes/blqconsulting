import { Stack, styled } from "@mui/material";

export const RealEstateOfferingsWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/2)",
		"& .solutions-list-upper-section": {
			padding: "0 calc(var(--basic-padding)/2)",
		},
		"& .carousel .slider": {
			gap: "calc(var(--flex-gap)/2)",
		},
		"& .carousel .slide": {
			flex: 1,
			"& .solution-card": {
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "top center",
				minHeight: "30.0625rem",
				height: "100%",
				borderRadius: "0px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
				"& .MuiCardContent-root": {
					padding: "calc(var(--basic-padding)/2)",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					gap: "calc(var(--flex-gap)/2)",
					"&:last-child": {
						paddingBottom: "calc(var(--basic-padding)/2)",
					},
				},
			},
		},
		"& .bottom-stack": {
			paddingTop: "calc(var(--basic-padding)/2)",
			"& .bottom-stack-item": {
				flex: 1,
				overflow: "hidden",
				padding: "calc(var(--basic-padding)/2)",
				gap: "calc(var(--flex-gap))",
			},
		},
		[theme.breakpoints.up("laptop")]: {
			"& .bottom-stack": {
				flexDirection: "row",
			},
		},
	};
});
