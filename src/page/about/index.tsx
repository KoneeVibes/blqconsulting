import { headerImages } from "../../config/static";
import { Header } from "../../container/header";
import { AppLayout } from "../../container/layout";
import { AboutWrapper } from "./styled";

export const About = () => {
    return (
        <AppLayout>
            <AboutWrapper>
                <Header
                    isCarousel={true}
                    headerImages={headerImages["about"]}
                />
            </AboutWrapper>
        </AppLayout>
    )
}