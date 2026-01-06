import { Box, Grid, Stack, Typography } from "@mui/material";
import { BlogsWrapper } from "./styled";
import { DotIcon } from "../../asset";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Blogs = () => {
	const navigate = useNavigate();

	const API_KEY = process.env.REACT_APP_API_KEY || "";
	const PROJECT_KEY = process.env.REACT_APP_PROJECT_KEY || "";
	const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || "";

	const [liveBlogs, setLiveBlogs] = useState<Array<Record<string, any>>>([]);

	useEffect(() => {
		const retrieveAllBlogService = async () => {
			try {
				const response = await fetch(
					`${API_ENDPOINT}/public/blog/${PROJECT_KEY}`,
					{
						method: "GET",
						headers: {
							Authorization: `APIKey ${API_KEY}`,
							"Content-Type": "application/json",
						},
					}
				);
				const res = await response.json();
				if (!response.ok) {
					console.error("Error:", res);
				}
				return setLiveBlogs(res.data);
			} catch (error) {
				console.error("API fetch error:", error);
			}
		};
		retrieveAllBlogService();
	}, [API_KEY, PROJECT_KEY, API_ENDPOINT]);

	const handleNavigateToBlog = (id: number) => navigate(`/blog/${id}`);

	return (
		<BlogsWrapper>
			<Stack className="heading">
				<Box component={"div"} className="dot-icon">
					<DotIcon />
				</Box>
				<Box component={"div"} className="title">
					<Typography
						variant="subtitle1"
						fontFamily={"Inter"}
						fontWeight={400}
						fontSize={{ mobile: "16px" }}
						lineHeight={"normal"}
						color={"var(--blog-heading-color)"}
						whiteSpace={"normal"}
						marginBlockEnd={"calc(var(--basic-margin)/8)"}
					>
						Latest articles
					</Typography>
				</Box>
			</Stack>
			<Grid
				container
				rowSpacing={"calc(var(--flex-gap))"}
				columnSpacing={"calc(var(--flex-gap)/2)"}
			>
				{(liveBlogs?.length > 0 ? liveBlogs : [])?.map(
					(blog: Record<string, any>, index: number) => {
						return (
							<Grid key={index} size={{ mobile: 12, tablet: 4 }}>
								<Stack className="blog-stack">
									<Box
										component={"div"}
										className="image-box"
										onClick={() => handleNavigateToBlog(index)}
									>
										<img src={blog?.thumbnail} alt={"Work Item"} />
									</Box>
									<Box component={"div"} className="detail-box">
										<Typography
											variant="h3"
											fontFamily={"Inter"}
											fontWeight={400}
											fontSize={{ mobile: "18px" }}
											lineHeight={"normal"}
											color={"var(--light-color)"}
											whiteSpace={"normal"}
											sx={{ cursor: "pointer" }}
											onClick={() => handleNavigateToBlog(index)}
										>
											{blog?.title}
										</Typography>
									</Box>
									<Box>
										<Typography
											variant="body1"
											fontFamily={"Inter"}
											fontWeight={500}
											fontSize={{ mobile: "11px" }}
											lineHeight={"normal"}
											color={"var(--blog-title-color)"}
											whiteSpace={"normal"}
										>
											{/* {`${blog?.createdAt.substring(0, 10)} — ${blog?.length}`} */}
											{`${blog?.createdAt.substring(0, 10)}`}
										</Typography>
									</Box>
								</Stack>
							</Grid>
						);
					}
				)}
			</Grid>
		</BlogsWrapper>
	);
};
