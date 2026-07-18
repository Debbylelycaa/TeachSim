import { useId } from "react";

import CheckboxIcon from "../../assets/icons/checkbox.svg";
import CheckboxCheckedIcon from "../../assets/icons/checkbox_checked.svg";

export default function Checkbox({
    checked = false,
    onChange,
    children,
    disabled = false,
}) {

    const id = useId();

    return (
        <label
            htmlFor={id}
            className={`checkbox-container ${disabled ? "checkbox-disabled" : ""}`}
        >
            <input
                id={id}
                type="checkbox"
                className="checkbox-input"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />

            <img
                src={checked ? CheckboxCheckedIcon : CheckboxIcon}
                alt=""
                className="checkbox-icon"
            />

            <span className="checkbox-label">
                {children}
            </span>

        </label>
    );
}