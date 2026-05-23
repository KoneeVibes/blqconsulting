import { Hero } from "../../container/hero";
import { AppLayout } from "../../container/layout";
import { BlogDetailPageWrapper } from "./styled";
import { useParams } from "react-router-dom";
import { BlogDetail } from "../../container/blogdetail";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

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
					},
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

	const getPlainTextFromHtml = (html?: string | null) => {
		if (!html) return "";
		const doc = new DOMParser().parseFromString(html, "text/html");
		const blockTags = new Set([
			"P",
			"DIV",
			"SECTION",
			"ARTICLE",
			"HEADER",
			"FOOTER",
			"MAIN",
			"ASIDE",
			"H1",
			"H2",
			"H3",
			"H4",
			"H5",
			"H6",
			"LI",
			"BLOCKQUOTE",
			"IMG",
			"BR",
		]);
		const parts: string[] = [];
		const walk = (node: Node) => {
			if (node.nodeType === Node.TEXT_NODE) {
				const text = node.textContent?.replace(/\s+/g, " ").trim();
				if (text) {
					parts.push(text);
				}
				return;
			}
			if (node.nodeType !== Node.ELEMENT_NODE) return;
			const element = node as HTMLElement;
			element.childNodes.forEach(walk);
			if (blockTags.has(element.tagName)) {
				parts.push(".\t");
			}
		};
		doc.body.childNodes.forEach(walk);
		return parts
			.join(" ")
			.replace(/\s+\./g, ".")
			.replace(/(?:\.\s*){2,}/g, ".\t")
			.replace(/\s+/g, " ")
			.trim();
	};

	return (
		<AppLayout>
			<BlogDetailPageWrapper>
				{(() => {
					const blog = (liveBlogs?.length > 0 ? liveBlogs : [])[Number(id)];
					const plainBody = getPlainTextFromHtml(blog?.body);
					const words = plainBody.split(/\s+/).filter(Boolean);
					const shortBody =
						words.length > 20
							? words.slice(0, 20).join(" ") + "..."
							: plainBody;

					return (
						<>
							<Hero
								hasThumbnail={true}
								subtitle={`${blog?.createdAt.substring(0, 10)}`}
								romanHeaderMessage={blog?.title}
								body={shortBody}
								thumbnail={blog?.thumbnail}
							/>
							<BlogDetail content={DOMPurify.sanitize(blog?.body ?? "")} />
						</>
					);
				})()}
			</BlogDetailPageWrapper>
		</AppLayout>
	);
};
