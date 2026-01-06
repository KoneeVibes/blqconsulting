import { Hero } from "../../container/hero";
import { AppLayout } from "../../container/layout";
import { BlogDetailPageWrapper } from "./styled";
import { useParams } from "react-router-dom";
import { BlogDetail } from "../../container/blogdetail";
import { useEffect, useState } from "react";

export const BlogDetailPage = () => {
	const { id } = useParams();

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

	return (
		<AppLayout>
			<BlogDetailPageWrapper>
				{(() => {
					const blog = (liveBlogs?.length > 0 ? liveBlogs : [])[Number(id)];
					let firstParagraph =
						blog?.body?.split("\n").find((p: string) => p.trim().length > 0) ||
						"";
					let words = firstParagraph.split(/\s+/);
					let shortBody =
						words.length > 20
							? words.slice(0, 20).join(" ") + "..."
							: firstParagraph;
					return (
						<>
							<Hero
								hasThumbnail={true}
								subtitle={`${blog?.createdAt.substring(0, 10)}`}
								romanHeaderMessage={blog?.title}
								body={shortBody}
								thumbnail={blog?.thumbnail}
							/>
							<BlogDetail content={blog?.body} />
						</>
					);
				})()}
			</BlogDetailPageWrapper>
		</AppLayout>
	);
};
