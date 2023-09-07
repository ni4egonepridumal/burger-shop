import React from "react";

interface IInputProps {
  onMyChange?: () => void;
  onMyBlur?: () => void;
  label: string;
  placeholder?: string;
  type: string;
  color: string;
}

export const InputFromRHF: React.FC<IInputProps> = ({
  onMyBlur,
  onMyChange,
  label,
  placeholder,
  color,
  type,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input placeholder={placeholder} type={type} onMyChange={onchange} />
    </div>
  );
};
