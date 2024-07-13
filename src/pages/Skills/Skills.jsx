import Container from "../../components/Containers/Container";
import MidHeader from "../../components/Headers/MidHeader";
import SubHeader from "../../components/Headers/SubHeader";
import Paragraph1 from "../../components/Paragraphs/Paragraph1";
import useScrollToTop from "../../hooks/useScrollToTop";
import { skills } from "../../utils/skills";
import MainHeader from './../../components/Headers/MainHeader';
import './skillsStyle.css';


export default function Skills() {
    useScrollToTop();
    <style>

    </style>
    return (
        <div>
            <MainHeader>
                Skills
            </MainHeader>
            <Container>
                <Paragraph1>
                    <p id="language" className="grid md:grid-cols-4 gap-10  p-4">
                        {
                            skills?.map(skill => <>
                                <div>
                                    <a href={skill?.url} target="_blank" rel="noreferrer">
                                        <img src={skill?.logo} alt={skill?.alt} width="40" height="40" />
                                    </a>
                                    <p>
                                        {skill?.name}
                                    </p>
                                </div>
                            </>)
                        }
                    </p>
                </Paragraph1>
            </Container>
        </div>
    )
}
