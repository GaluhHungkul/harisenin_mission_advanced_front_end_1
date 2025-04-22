import {  forwardRef } from "react";

type Props = {
    id? : string;
    type : string;
    placeholder : string;

}

const Input  = forwardRef<HTMLInputElement, Props> ((props, ref) => {
  return (
    <input className="border w-full text-[10px] lg:text-lg border-slate-300 rounded-full px-4 py-1" />
  )
})

export default Input