import { NavLink } from "react-router-dom";

export default function NavButton({
    to,
    children,
}) {

    return (

        <NavLink
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
                `nav-button ${isActive ? "nav-active" : ""}`
            }
        >

            {children}

        </NavLink>

    );

}