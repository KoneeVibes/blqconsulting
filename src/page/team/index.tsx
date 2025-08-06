import { Hero } from "../../container/hero";
import { AppLayout } from "../../container/layout";
import { TeamMembers } from "../../container/teammembers";
import { TeamWrapper } from "./styled";

export const Team = () => {
    return (
        <AppLayout>
            <TeamWrapper>
                <Hero
                    hasThumbnail={false}
                    subtitle="Our Team"
                    romanHeaderMessage="The Creative Minds"
                    italizedHeaderMessage="Behind the Work We Love"
                    body="We’re a group of passionate individuals, strategists, and builders—united by a shared vision and a drive to create purposeful, human-centered experiences. Each of us brings a unique voice to the table, and together, we make it all happen."
                />
                <TeamMembers />
            </TeamWrapper>
        </AppLayout>
    )
}