import { Typography } from "@mui/material";
import { BlogDetailPropsType } from "../../type/container.type";
import { BlogDetailWrapper } from "./styled";

export const BlogDetail: React.FC<BlogDetailPropsType> = ({ content }) => {
    const paragraphs = content?.split('\n').filter(line => line.trim() !== '');

    return (
        <BlogDetailWrapper>
            {paragraphs.map((paragraph, index) => (
                <Typography
                    key={index}
                    variant="body1"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: "18px" }}
                    lineHeight={"normal"}
                    color={"var(--blog-content-text-color)"}
                    whiteSpace={"normal"}
                    marginBlockEnd={(index !== paragraphs.length - 1) ? "calc(var(--basic-margin)/3)" : "unset"}
                >
                    {paragraph}
                </Typography>
            ))}
        </BlogDetailWrapper>
    )
}