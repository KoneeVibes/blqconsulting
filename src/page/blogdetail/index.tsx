import { Hero } from "../../container/hero";
import { AppLayout } from "../../container/layout";
import { BlogDetailPageWrapper } from "./styled";
import { useParams } from "react-router-dom";
import { BlogDetail } from "../../container/blogdetail";
import { blogs } from "../../config/static";

export const BlogDetailPage = () => {
    const { id } = useParams();

    return (
        <AppLayout>
            <BlogDetailPageWrapper>
                <Hero
                    hasThumbnail={true}
                    subtitle={`${blogs[Number(id)].date} — ${blogs[Number(id)].length}`}
                    romanHeaderMessage={blogs[Number(id)].title}
                    body={blogs[Number(id)].brief}
                    thumbnail={blogs[Number(id)].thumbnail}
                />
                <BlogDetail
                    content={blogs[Number(id)].content}
                />
            </BlogDetailPageWrapper>
        </AppLayout>
    )
}