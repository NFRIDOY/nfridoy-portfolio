import Bannner from "../../components/Bannner/Bannner";
import Education from "../../components/Education/Education";
import MainHeader from "../../components/Headers/MainHeader";
import Container from './../../components/Containers/Container';


export default function Home() {
    return (
        <div>
            <Container>
                <Bannner></Bannner>
                <MainHeader>
                    Education
                </MainHeader>
                <Education></Education>

            </Container>
        </div>
    )
}
