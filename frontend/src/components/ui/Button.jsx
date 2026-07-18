export default function Button({
    children,
    type = "button",
    onClick,
    disabled = false,
    loading = false,
    fullWidth = true,
    className = "",
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`btn-game ${fullWidth ? "btn-full" : ""} ${className}`}
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