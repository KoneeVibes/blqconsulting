import { Hero } from "../../container/hero";
import { AppLayout } from "../../container/layout";
import { BlogWrapper } from "./styled";

export const Blog = () => {
    return (
        <AppLayout>
            <BlogWrapper>
                <Hero
                    hasThumbnail={false}
                    romanHeaderMessage="We share knowledge,"
                    italizedHeaderMessage="experience and passion"
                />
            </BlogWrapper>
        </AppLayout>
    )
}