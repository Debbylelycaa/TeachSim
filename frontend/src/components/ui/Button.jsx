export default function Button({
    children,
    type = "button",
    onClick,
    disabled = false,
    loading = false,
    fullWidth = true,
    className = "",
    variant = "primary",
}) {

    const variantClass = {
        primary: "btn-game",
        hero: "btn-hero",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
                ${variantClass[variant]}
                ${fullWidth ? "btn-full" : ""}
                ${className}
            `}
        >
            {loading ? (
                <>
                    <span className="btn-spinner"></span>
                    Memproses...
                </>
            ) : (
                children
            )}
        </button>
    );
}