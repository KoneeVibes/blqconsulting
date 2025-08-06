import { Box, Grid } from "@mui/material";
import { TeamMembersWrapper } from "./styled";
import { teamGallery } from "../../config/static";

export const TeamMembers = () => {
    return (
        <TeamMembersWrapper
            container
            rowSpacing={"calc(var(--flex-gap)/3)"}
            columnSpacing={"calc(var(--flex-gap)/6)"}
        >
            {teamGallery?.map((work: Record<string, any>, index: number) => {
                return (
                    <Grid
                        key={index}
                        size={{ mobile: 12, tablet: 4 }}
                    >
                        <Box
                            component={"div"}
                            className="image-box"
                        >
                            <img
                                src={work?.url}
                                alt={work?.title}
                            />
                        </Box>
                    </Grid>
                )
            })}
        </TeamMembersWrapper>
    )
}