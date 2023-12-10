import { Outlet } from "react-router-dom";
import Container from "../components/Containers/Container";
import Navbar from "../components/Navbar/Navbar";


export default function MainLayout() {
    return (
        <div>
            <Container>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </Container>

        </div>
    )
}
