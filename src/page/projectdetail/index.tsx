import { Hero } from "../../container/hero";
import { AppLayout } from "../../container/layout";
import { ProjectDetailPageWrapper } from "./styled";
import { useParams } from "react-router-dom";
import { ProjectDetail } from "../../container/projectdetail";
import { projects } from "../../config/static";

export const ProjectDetailPage = () => {
    const { id } = useParams();

    return (
        <AppLayout>
            <ProjectDetailPageWrapper>
                <Hero
                    hasThumbnail={true}
                    subtitle={projects[Number(id)].subtitle}
                    romanHeaderMessage={projects[Number(id)].title}
                    body={projects[Number(id)].description}
                    thumbnail={projects[Number(id)].thumbnail}
                />
                <ProjectDetail
                    detail={projects[Number(id)]}
                />
            </ProjectDetailPageWrapper>
        </AppLayout>
    )
}