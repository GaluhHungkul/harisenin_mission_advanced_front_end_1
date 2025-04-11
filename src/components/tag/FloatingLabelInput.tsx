import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  showIcon?: boolean;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  className = '',
  showIcon = false,
  ...props
}) => {
  return (
    <div className={`relative w-full text-white  ${className} bg-[#22282A]`}>
      {showIcon && (
        <FontAwesomeIcon
          icon={faPen}
          className="absolute right-3  top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none"
        />
      )}
      <input
        id={id}
        type={type}
        placeholder=" "
        value={value}
        onChange={onChange}
        className={`peer w-full border border-gray-300 rounded-md px-3 pt-6 pb-2 text-sm focus:outline-none focus:border-blue-500 lg:text-base ${
          showIcon ? 'pr-10' : ''
        }`}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-3 top-2 text-gray-500 text-sm transition-all
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
