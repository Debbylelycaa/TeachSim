import "../../styles/main.css";

import Navbar from "../navigation/Navbar";

export default function MainLayout({
    children,
    background,
    grid,
    grass,
    isLoggedIn = false,
    user = null,
}) {
    return (
        <main className="main-page">

            {/* Background */}
            {background && (
                <img
                    src={background}
                    alt=""
                    className="main-background"
                />
            )}

            {/* Grid */}
            {grid && (
                <img
                    src={grid}
                    alt=""
                    className="main-grid"
                />
            )}

            {/* Navbar */}
            <Navbar
                isLoggedIn={isLoggedIn}
                user={user}
            />

            {/* Content */}
            <section className="main-content">
                {children}
            </section>

            {/* Grass */}
            {grass && (
                <img
                    src={grass}
                    alt=""
                    className="main-grass"
                />
            )}

        </main>
    );
}