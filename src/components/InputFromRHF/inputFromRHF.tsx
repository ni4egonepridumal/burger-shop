import React from "react";
import styles from './inputFromRHF.module.scss';

interface IInputProps {
  onMyChange?: () => void;
  onMyBlur?: () => void;
  label: string;
  placeholder?: string;
  type: string;
  color?: string;
  value?: string;
}

export const InputFromRHF: React.FC<IInputProps> = ({
  onMyBlur,
  onMyChange,
  label,
  placeholder,
  type,
  value

}) => {
  return (
    <div className={styles.inner}>
      <label>{label}</label>
      <input placeholder={placeholder} type={type} onChange={onMyChange} onBlur={onMyBlur} className={styles.input} value={value} />
    </div>
  );
};
