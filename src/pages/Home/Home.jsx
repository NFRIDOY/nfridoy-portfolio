import Bannner from "../../components/Bannner/Bannner";
import ContactMe from "../../components/ContactMe/ContactMe";
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
                <MainHeader>
                    <div id="#ContactMe">
                        Contact Me
                    </div>
                </MainHeader>
                <ContactMe></ContactMe>
            </Container>
        </div>
    )
}
