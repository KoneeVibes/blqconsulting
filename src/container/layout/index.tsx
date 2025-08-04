import { AppLayoutPropsType } from "../../type/container.type";
import { Footer } from "../footer";
import { Navigation } from "../navigation";
import { AppLayoutWrapper } from "./styled";

export const AppLayout: React.FC<AppLayoutPropsType> = ({ children }) => {
    return (
        <AppLayoutWrapper>
            <Navigation />
            {children}
            <Footer />
        </AppLayoutWrapper>
    )
}