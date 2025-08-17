import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  errors?: string[];
};

export default function Input({
  errors,
  className,
  ...otherProps
}: Props & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="w-full">
      <input
        className={twMerge(errors ? "ring-2 ring-red-400" : "", className)}
        aria-describedby="error"
        {...otherProps}
      />
      {errors && (
        <span className="inline-block mt-2 text-red-400">{errors[0]}</span>
      )}
    </div>
  );
}
