import { forwardRef } from "react";

export default forwardRef(function Input(
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
  },
  ref
) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`font-iregular pl-6 text-${fgColor} mt-5 block text-sm`}
      >
        {text}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autocomplete}
          value={value}
          required
          className={`text-iregular text-${fgColor} bg-${bgColor} block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 pl-6 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm`}
          onChange={onChange}
          disabled={enabled == false}
          ref={ref}
        />
      </div>
    </div>
  );
});
