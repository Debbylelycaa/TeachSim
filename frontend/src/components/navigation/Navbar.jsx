import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import NavButton from "./NavButton";
import NavbarLogo from "../../assets/images/logo_navbar.png";
import ProfileIcon from "../../assets/images/profile.png";

export default function Navbar({
  isLoggedIn = false,

  user = null,
}) {
  const navigate = useNavigate();

  function handleProfile() {
    navigate("/profile");
  }

  return (
    <header className="navbar">
      {/* =========================
                LOGO
            ========================== */}

      <div className="navbar-logo">
        <Link to="/">
          <img src={NavbarLogo} alt="TeachSim" />
        </Link>
      </div>

      {/* =========================
                MENU
            ========================== */}

      <nav className="navbar-menu">
        <NavButton to="/">Beranda</NavButton>

        <NavButton to="/simulation">Simulasi</NavButton>
      </nav>

      {/* =========================
                RIGHT
            ========================== */}

      <div className="navbar-right">
        {isLoggedIn ? (
          <button className="profile-button" onClick={handleProfile}>
            <img src={ProfileIcon} alt="Profile" className="profile-icon" />
          </button>
        ) : (
          <Link to="/login" className="signup-button">
            SIGN UP
          </Link>
        )}
      </div>
    </header>
  );
}
