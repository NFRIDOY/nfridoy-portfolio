import Bannner from "../../components/Bannner/Bannner";
import MainHeader from "../../components/Headers/MainHeader";
import Container from './../../components/Containers/Container';


export default function Home() {
    return (
        <div>
            <Bannner></Bannner>
            <Container>
                <MainHeader>
                    Education
                </MainHeader>
            </Container>
        </div>
    )
}
