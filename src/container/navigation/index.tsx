import { Box, IconButton, Stack, Typography } from "@mui/material";
import { NavigationWrapper } from "./styled";
import logo from "../../asset/image/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { AppContext } from "../../context";
import { navLinks } from "../../config/static";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { BaseButton } from "../../component/button/styled";

export const Navigation = () => {
	const navigate = useNavigate();
	const { openMenu, setOpenMenu } = useContext(AppContext);

	const handleLogoClick = () => {
		setOpenMenu(false);
		return navigate("/");
	};

	const handleContactUsClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.stopPropagation();
		return (window.location.href = "mailto:umorenofofonono@gmail.com");
	};

	return (
		<NavigationWrapper>
			<Box component={"div"} className="favicon-box">
				<img src={logo} alt="logo" onClick={handleLogoClick} />
			</Box>
			<Stack className="nav-links">
				{navLinks.map((navLink, index) => {
					return (
						<HashLink
							key={index}
							to={navLink.url}
							smooth={true}
							onClick={() => setOpenMenu(false)}
						>
							<Typography
								variant="subtitle1"
								fontFamily={"Allrounder Monument Test"}
								fontWeight={400}
								fontSize={{ mobile: 15, laptop: 12, desktop: 15 }}
								lineHeight={"normal"}
								sx={{
									cursor: "pointer",
									textAlign: { mobile: "center", laptop: "left" },
									color: {
										mobile: "var(--light-color)",
										laptop: "var(--subtitle-dark-color)",
									},
								}}
							>
								{navLink.name}
							</Typography>
						</HashLink>
					);
				})}
			</Stack>
			<Box component={"div"} className="contact-button">
				<BaseButton
					disableElevation
					variant="contained"
					onClick={handleContactUsClick}
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
						Contact Us
					</Typography>
				</BaseButton>
			</Box>
			<Box component={"div"} className="menu-button-box">
				<IconButton
					size="large"
					color="inherit"
					aria-label="menu"
					sx={{
						color: "var(--primary-color)",
						padding: 0,
					}}
					onClick={() => setOpenMenu(!openMenu)}
				>
					<MenuIcon />
				</IconButton>
			</Box>
		</NavigationWrapper>
	);
};
