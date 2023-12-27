import { Outlet } from "react-router-dom";
import Container from "../components/Containers/Container";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


export default function MainLayout() {
    return (
        <div>
            <Container>
                <Navbar></Navbar>
            </Container>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    )
}
