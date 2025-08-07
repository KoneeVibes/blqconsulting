import { Hero } from "../../container/hero";
import { AppLayout } from "../../container/layout";
import { ProjectWrapper } from "./styled";
import projectHeroThumbnail from "../../asset/image/project-hero-thumbnail.png";
import { Projects } from "../../container/projects";

export const Project = () => {
    return (
        <AppLayout>
            <ProjectWrapper>
                <Hero
                    hasThumbnail={true}
                    subtitle="OUR PROJECTS"
                    romanHeaderMessage="Each project is a unique adventure and a"
                    italizedHeaderMessage="chance to discover new opportunities"
                    body="We’re a group of passionate individuals, strategists, and builders—united by a shared vision and a drive to create purposeful, human-centered experiences. Each of us brings a unique voice to the table, and together, we make it all happen."
                    thumbnail={projectHeroThumbnail}
                />
                <Projects />
            </ProjectWrapper>
        </AppLayout>
    )
}