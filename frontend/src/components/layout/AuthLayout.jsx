import "../../styles/auth.css";

export default function AuthLayout({
    children,
    background,
    grid,
    grass,
}){

    return(

        <main className="auth-page">

            {/* BACKGROUND */}
            {background && (
                <img
                    src={background}
                    alt=""
                    className="auth-background object-cover w-full h-full"
                />
            )}

            {/* GRID */}
            {grid && (
                <img
                    src={grid}
                    alt=""
                    className="auth-grid object-cover w-full h-full"
                />
            )}

            {/* GRASS */}
            {grass && (
                <img
                    src={grass}
                    alt=""
                    className="auth-grass"
                />
            )}

            <div className="auth-wrapper">

                {children}

            </div>

        </main>

    )

}