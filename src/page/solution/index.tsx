import { headerImages } from "../../config/static";
import { Header } from "../../container/header";
import { AppLayout } from "../../container/layout";
import { Problems } from "../../container/problems";
import { Specialization } from "../../container/specialization";
import { SolutionWrapper } from "./styled";

export const Solution = () => {
    return (
        <AppLayout>
            <SolutionWrapper>
                <Header
                    isCarousel={true}
                    headerImages={headerImages["solution"]}
                    romanHeaderMessage={"We support business owners and their"}
                    italizedHeaderMessage={"transformation journey"}
                />
                <Specialization />
                <Problems />
            </SolutionWrapper>
        </AppLayout>
    )
}