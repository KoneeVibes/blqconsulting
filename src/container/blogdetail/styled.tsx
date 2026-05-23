import { Box, styled } from "@mui/material";

export const BlogDetailWrapper = styled(Box)(() => {
	return {
		padding: "0 calc(var(--basic-padding)/2) calc(var(--basic-padding)/2)",
		"& img": {
			width: "100%",
			height: "100%",
			objectFit: "fill",
		},
	};
});
