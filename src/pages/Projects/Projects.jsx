import MainHeader from '../../components/Headers/MainHeader'

import Container from './../../components/Containers/Container';
import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer'

export default function Projects() {
    return (
        <div>
            <MainHeader>
                Projects
            </MainHeader>
            <Container>
                <ProjectsContainer />
            </Container>
        </div>
    )
}
