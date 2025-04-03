import { FC } from "react";

type Props = {
    id? : string;
    type : string;
    placeholder : string;
}

const Input :FC<Props> = ({id, type, placeholder}) => {
  return (
    <input
          id={id}
          type={type}
          className="border w-full text-[10px] lg:text-lg border-slate-300 rounded-full px-4 py-1"
          placeholder={placeholder}
    />
  )
}

export default Input