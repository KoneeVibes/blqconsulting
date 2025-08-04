import { headerImages } from "../../config/static";
import { Header } from "../../container/header";
import { AppLayout } from "../../container/layout";
import { LeadBlogs } from "../../container/leadblogs";
import { SetApart } from "../../container/setapart";
import { SolutionsList } from "../../container/solutionslist";
import { Testimonial } from "../../container/testimonial";
import { Vision } from "../../container/vision";
import { HomeWrapper } from "./styled";

export const Home = () => {
    return (
        <AppLayout>
            <HomeWrapper>
                <Header
                    isCarousel={true}
                    headerImages={headerImages["home"]}
                    romanHeaderMessage={"Start your journey to the"}
                    italizedHeaderMessage={"digital future"}
                />
                <SolutionsList />
                <Vision />
                <SetApart />
                <Testimonial />
                <LeadBlogs />
            </HomeWrapper>
        </AppLayout>
    )
}