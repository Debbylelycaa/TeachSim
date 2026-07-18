export default function AuthCard({
    children,
    className = "",
    logo,
    title,
    subtitle,
}) {
    return (
        <section className={`auth-card ${className}`}>
            {(logo || title || subtitle) && (
                <header className="auth-card-header">
                    {logo && (
                        <div className="auth-logo">
                            <img
                                src={logo}
                                alt="TeachSim Logo"
                            />
                        </div>
                    )}

                    {title && (
                        <h1 className="auth-title">
                            {title}
                        </h1>
                    )}

                    {subtitle && (
                        <p className="auth-subtitle">
                            {subtitle}
                        </p>
                    )}
                </header>
            )}

            <div className="auth-card-body">
                {children}
            </div>
        </section>
    );
}