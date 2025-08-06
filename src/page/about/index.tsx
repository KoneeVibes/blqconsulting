import { headerImages } from "../../config/static";
import { Foundations } from "../../container/foundations";
import { Header } from "../../container/header";
import { AppLayout } from "../../container/layout";
import { Mission } from "../../container/mission";
import { WhereAreWeHeading } from "../../container/whereweareheading";
import { WhoAreWe } from "../../container/whoarewe";
import { AboutWrapper } from "./styled";

export const About = () => {
    return (
        <AppLayout>
            <AboutWrapper>
                <Header
                    isCarousel={true}
                    headerImages={headerImages["about"]}
                />
                <WhereAreWeHeading />
                <WhoAreWe />
                <Foundations />
                <Mission />
            </AboutWrapper>
        </AppLayout>
    )
}