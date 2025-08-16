import { InputHTMLAttributes } from "react";

type Props = {
  errors?: string[];
  name: string;
};

export default function Input({
  errors,
  name,
  ...otherProps
}: Props & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="w-full">
      <input
        id={name}
        name={name}
        className={errors ? "outline-2 outline-red-700" : ""}
        aria-describedby="error"
        {...otherProps}
      />
      {errors && <span className="text-red-700">{errors[0]}</span>}
    </div>
  );
}
