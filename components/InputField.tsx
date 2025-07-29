import React from "react";

interface InputFieldProps {
  title: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputField = ({
  title,
  placeholder,
  value,
  onChange,
  type = "text",
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={title} className="font-medium text-secondary">
        {title}
      </label>
      <input
        type={type}
        id={title}
        placeholder={placeholder}
        name={title}
        className="border border-light-gray bg-light-gray/20 rounded-md py-3 px-4 outline-none transition-colors duration-200 focus:border-secondary"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
