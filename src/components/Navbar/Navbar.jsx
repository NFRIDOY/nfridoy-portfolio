import { Link, NavLink } from "react-router-dom";
// const resumeKey = "1SQC9PysOHk8RKhMV2hcQAwaKeY36pNPn"
// const resumeURL = "https://drive.google.com/u/0/uc?id=1vtovEmlg_RCf93SRHZpb2-37RtCjUhia&export=download" // Old URL
const resumeURL = "https://drive.google.com/u/0/uc?id=19Aqtc8L2FTj2MEZeKWwpMirthG_6_4np&export=download" // New URL
// const resumeURL = "1SQC9PysOHk8RKhMV2hcQAwaKeY36pNPn"


export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        {/* <li>
                        <NavLink
                            to="/blogs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Blogs
                        </NavLink>
                    </li> */}
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
                            <Link
                                to={"#ContactMe"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Contact Me
                            </Link>
                        </li>

                        <li>
                            <a
                                href="#ContactMe"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Hire Me
                            </a>
                        </li>
                        <li>
                            <a
                                // href="../../assets/resume/nfridoyResume.pdf"
                                href={resumeURL}
                                download
                                className="btn btn-primary"
                            // className={({ isActive, isPending }) =>
                            //     isPending ? "pending" : isActive ? "active" : ""
                            // }
                            >
                                My Resume
                            </a>
                        </li>

                    </ul>
                </div>
                <a className="font-black  font-sans  text-xl ">
                    <span className="text-6xl text-neutral italic ">NF</span>
                    <span className="text-xl text-neutral ">RIDOY</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
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
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            to="/blogs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Blogs
                        </NavLink>
                    </li> */}
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

                    {/* <li>
                        <Link
                            to={'#ContactMe'}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Contact Me
                        </Link>
                    </li> */}
                    <li>
                        <a href="#ContactMe"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Contact Me
                        </a>
                    </li>

                    <li>
                        <button
                            to="#ContactMe"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Hire Me
                        </button>
                    </li>
                    <li className="h-2">
                        <a
                            href={resumeURL}
                            download
                            className="btn btn-sm bg-gradient-to-tr to: from-violet-700 via-purple-700 to-red-700 text-white h-fit"
                        >
                            My Resume
                        </a>
                    </li>
                    {/* <li>
                        <details>
                            <summary>Blogs</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li> */}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
    )
}
