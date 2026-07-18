import { useState } from "react";

export default function Input({
    label,
    icon,
    type = "text",
    error,
    className = "",
    ...props
}) {

    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (

        <div className="input-group">

            {label && (

                <label className="input-label">

                    {icon && (

                        <img
                            src={icon}
                            alt=""
                            className="input-svg"
                        />

                    )}

                    <span>{label}</span>

                </label>

            )}

            <div className="input-wrapper">

                <input
                    type={
                        isPassword
                            ? showPassword
                                ? "text"
                                : "password"
                            : type
                    }
                    className={`game-input ${className}`}
                    {...props}
                />

                {isPassword && (

                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() =>
                            setShowPassword(!showPassword)
                        }
                    >

                        {showPassword ? "🙈" : "👁"}

                    </button>

                )}

            </div>

            {error && (

                <span className="input-error">

                    {error}

                </span>

            )}

        </div>

    );

}