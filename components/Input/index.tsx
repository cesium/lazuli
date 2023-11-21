import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  autocomplete?: string;
  fgColor: string;
  bgColor: string;
  enabled?: boolean;
}

/*
 * This function exists to prevent other Input similar components (like PasswordInput) to have different styles
 * if somebody forget to edit the styles across all components
 */
export const inputStyle = (
  fgColor: string,
  bgColor: string,
  enabled: boolean
) => {
  let textColor = `text-${fgColor}`;
  let backColor = `bg-${bgColor}`;

  if (enabled === false) {
    textColor = "text-gray-500";
    backColor = "bg-gray-100";
  } else if (enabled === true) {
    textColor = `bg-${fgColor}`;
    backColor = `bg-${bgColor}`;
  }

  return `text-iregular mt-2 flex items-center ${textColor} ${backColor} appearance-none rounded-full border border-gray-300 px-3 py-2 pl-6 placeholder-gray-400 shadow-sm sm:text-sm`;
};

export default forwardRef<HTMLInputElement, Props>(function Input(
  {
    text,
    id,
    name,
    type,
    value,
    autocomplete,
    fgColor,
    bgColor,
    onChange,
    enabled,
    ...rest
  },
  ref
) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`pl-6 font-iregular text-${fgColor} mt-5 block text-sm`}
      >
        {text}
      </label>
      <div className={inputStyle(fgColor, bgColor, enabled)}>
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autocomplete}
          value={value}
          required
          className="w-full bg-transparent outline-none"
          onChange={onChange}
          disabled={enabled == false}
          ref={ref}
          {...rest}
        />
      </div>
    </div>
  );
});
