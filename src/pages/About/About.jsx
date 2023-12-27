import { Link } from "react-router-dom";
import Container from "../../components/Containers/Container";
import MainHeader from "../../components/Headers/MainHeader";
import SubHeader from "../../components/Headers/SubHeader";
import Paragraph1 from "../../components/Paragraphs/Paragraph1";
import Education from "../../components/Education/Education";
const NF = "Md Noman Faysal Ridoy"

export default function About() {
    return (
        <div>
            <MainHeader>
                About
            </MainHeader>
            <Container>
                <section>
                    <Paragraph1>
                        Hey there! 👋 I&apos;m <span className="text-violet-700">{NF}</span>, a passionate MERN stack developer dedicated to crafting engaging digital experiences. With one year of experience in the ever-evolving world of web development, I&apos;ve had the privilege of bringing ideas to life through elegant code and intuitive design.
                    </Paragraph1>

                    <MainHeader>
                        Education
                    </MainHeader>
                    <Education></Education>

                    <SubHeader>
                        My Journey
                    </SubHeader>

                    <Paragraph1>
                        My fascination with web development began in 2023. Since then, I&apos;ve been on an exciting journey, honing my skills in Javascript and staying on the cutting edge of industry trends. I thrive on tackling challenges and finding innovative solutions that merge functionality with creativity.
                    </Paragraph1>

                    <SubHeader>
                        What I Do
                    </SubHeader>

                    <Paragraph1>
                        Whether it&apos;s building responsive websites, optimizing user interfaces for seamless interaction, or diving into the world of Websites, I&apos;m driven by a commitment to deliver high-quality work that exceeds expectations.
                    </Paragraph1>

                    <SubHeader>
                        Languages and Tools I Use
                    </SubHeader>

                    <Paragraph1>
                        <p className="flex justify-center gap-4">

                            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
                            </a>

                            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">

                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" />

                            </a>

                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
                            </a>

                            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
                            </a>
                            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" />
                            </a>

                            <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" />
                            </a>

                            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />
                            </a>

                            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">

                                <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40" />

                            </a>

                            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />
                            </a>
                            <a href="https://postman.com" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" />
                            </a>

                            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
                            </a>

                            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" />
                            </a>

                            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                                <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40" />
                            </a>

                            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" />
                            </a>

                            <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer">
                                <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="40" height="40" />
                            </a>

                            <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40" />
                            </a>
                            <a href="https://www.chartjs.org" target="_blank" rel="noreferrer">
                                <img src="https://www.chartjs.org/media/logo-title.svg" alt="chartjs" width="40" height="40" />
                            </a>
                            <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40" />
                            </a>

                            <a href="https://www.java.com" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40" />
                            </a>

                            <a href="https://www.mathworks.com/" target="_blank" rel="noreferrer">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="matlab" width="40" height="40" />
                            </a>

                            <a href="https://www.python.org" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" />
                            </a>




                        </p>
                    </Paragraph1>

                    <SubHeader>
                        Why Work With Me
                    </SubHeader>

                    <Paragraph1>
                        I believe in the power of collaboration and open communication. I approach each project with enthusiasm, attention to detail, and a determination to not just meet but surpass project goals. My goal is to create impactful, user-centric solutions that leave a lasting impression.
                    </Paragraph1>

                    <SubHeader>
                        Let&apos;s Connect
                    </SubHeader>

                    <Paragraph1>
                        When I&apos;m not coding, you&apos;ll find me on <Link to={'https://www.linkedin.com/in/nfridoy/'} className="text-blue-500 font-bold">Linkedin</Link>. I&apos;m always up for a chat about new ideas, projects, or anything tech-related! Feel free to reach out at <span className="text-blue-500 font-bold"> nfridoy@gmail.com </span> — I&apos;d love to discuss how we can collaborate and bring your vision to life.

                        Thanks for stopping by—I can&apos;t wait to connect!
                    </Paragraph1>

                </section>
            </Container>
        </div>
    )
}
