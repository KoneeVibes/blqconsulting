import { headerImages } from "../../config/static";
import { Header } from "../../container/header";
import { HowWeWork } from "../../container/howwework";
import { AppLayout } from "../../container/layout";
import { Mission } from "../../container/mission";
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
                <HowWeWork />
                <Mission />
            </SolutionWrapper>
        </AppLayout>
    )
}