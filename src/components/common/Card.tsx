import { forwardRef, ReactNode } from "react";

type Props = {
  img: string;
  isVertical: boolean;
  children?: ReactNode;
};

const Card = forwardRef<HTMLDivElement, Props>(({ img, isVertical = true, children, ...rest }, ref) => {

  return (
    <div
      ref={ref}
      {...rest}
      className={`relative flex items-end justify-between p-4 bg-cover bg-no-repeat bg-center text-white  rounded  
        ${isVertical
          ? "w-24 h-36 lg:w-[234px] lg:h-[365px]"
          : "w-[302px] h-[151px] lg:h-[162px]"} group`}
      style={{ backgroundImage: `url(${img})` }}
    >
      {children}
    </div>
  );
}); 

Card.displayName = "Card"; 
export default Card;
