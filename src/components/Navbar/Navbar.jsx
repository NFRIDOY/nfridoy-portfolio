import { Link, NavLink } from "react-router-dom";
import NFRidoy from "../NFRidoy/NFRidoy";
// const resumeKey = "1SQC9PysOHk8RKhMV2hcQAwaKeY36pNPn"
// const resumeURL = "https://drive.google.com/u/0/uc?id=1vtovEmlg_RCf93SRHZpb2-37RtCjUhia&export=download" // Old URL
const resumeURL = "https://drive.google.com/u/0/uc?id=19Aqtc8L2FTj2MEZeKWwpMirthG_6_4np&export=download" // New URL
// const resumeURL = "1SQC9PysOHk8RKhMV2hcQAwaKeY36pNPn"


export default function Navbar() {
    const menu = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/projects"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Projects
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/skills"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Skills
            </NavLink>
        </li>
        <li>
            <NavLink to={"/ContactMe"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Contact/Hire Me
            </NavLink>
        </li>
        <li className="h-2">
            <a
                href={resumeURL}
                download
                className="btn btn-sm bg-gradient-to-tr to: from-violet-700 via-purple-500 to-[#9E468A] text-white h-fit"
            >
                Resume
            </a>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 lg:flex justify-between">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {menu}
                    </ul>
                    <a className="btn btn-ghost text-xl">
                        <NFRidoy />
                    </a>
                </div>

            </div>
            <div className="navbar-end w-fit hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
        </div>)
}
