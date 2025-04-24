import { useState, forwardRef } from "react";

type Props = {
    id?: string;
    type: string;
    placeholder: string;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="relative">
            <input
                {...props}
                ref={ref}
                required
                autoComplete="off"
                type={props.type === "password" && showPassword ? "text" : props.type}
                className="border w-full text-[10px] lg:text-lg border-slate-300 rounded-full px-4 py-1"
            />
            {props.type === "password" && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500"
                >
                    {showPassword ? "Hide" : "Show"}
                </button>
            )}
        </div>
    );
});

export default Input;
