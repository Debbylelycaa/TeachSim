import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavButton from "./NavButton";
import NavbarLogo from "../../assets/images/logo_navbar.png";
import ProfileIcon from "../../assets/images/profile.png";

import { logout } from "../../lib/supabaseClient";

export default function Navbar({
    isLoggedIn = false,
    user = null,
}) {
    const navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpenMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    function handleProfile() {
        setOpenMenu(!openMenu);
    }

    async function handleLogout() {
        try {
            await logout();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <header className="navbar">
            {/* LOGO */}

            <div className="navbar-logo">
                <Link to="/">
                    <img src={NavbarLogo} alt="TeachSim" />
                </Link>
            </div>

            {/* MENU */}

            <nav className="navbar-menu">
                <NavButton to="/">Beranda</NavButton>

                <NavButton to="/materials">
                    Simulasi
                </NavButton>
            </nav>

            {/* RIGHT */}

            <div className="navbar-right">
                {isLoggedIn ? (
                    <div
                        className="profile-wrapper"
                        ref={dropdownRef}
                    >
                        <button
                            className="profile-button"
                            onClick={handleProfile}
                        >
                            <img
                                src={ProfileIcon}
                                alt="Profile"
                                className="profile-icon"
                            />
                        </button>

                        {openMenu && (
                            <div className="profile-dropdown">

                                <div className="profile-info">

                                    <strong>
                                        {user?.user_metadata
                                            ?.full_name ??
                                            "Pengguna"}
                                    </strong>

                                    <span>
                                        {user?.email}
                                    </span>

                                </div>

                                <button
                                    onClick={() => {
                                        setOpenMenu(false);
                                        navigate("/profile");
                                    }}
                                >
                                    👤 My Profile
                                </button>

                                <button
                                    onClick={() => {
                                        setOpenMenu(false);
                                        navigate("/settings");
                                    }}
                                >
                                    ⚙️ Settings
                                </button>

                                <div className="dropdown-divider" />

                                <button
                                    className="logout-button"
                                    onClick={handleLogout}
                                >
                                    🚪 Logout
                                </button>

                            </div>
                        )}
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="signup-button"
                    >
                        SIGN UP
                    </Link>
                )}
            </div>
        </header>
    );
}