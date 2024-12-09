import { NavLink } from "react-router-dom";

const Header = () => {
    const links = (
        <>
            <li>
                <NavLink to="/" className="text-sm font-medium hover:text-primary">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/Listed" className="text-sm font-medium hover:text-primary">
                    Listed Books
                </NavLink>
            </li>
            <li>
                <NavLink to="/Read" className="text-sm font-medium hover:text-primary">
                    Pages to Read
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="fixed top-0 left-0 navbar bg-base-100 z-50 w-full shadow-md">
            <div className="navbar-start">
                {/* Dropdown Menu for Small Screens */}
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                        aria-label="Toggle menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 bg-base-100 rounded-box w-52 shadow-lg">
                        {links}
                    </ul>
                </div>
                {/* Logo */}
                <a className="btn btn-ghost normal-case text-xl font-bold text-primary">
                    BookList
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* Links for Large Screens */}
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end gap-2">
                {/* Buttons */}
                <a
                    className="btn btn-sm bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg">
                    Sign in
                </a>
                <a
                    className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg">
                    Sign up
                </a>
            </div>
        </div>
    );
};

export default Header;
