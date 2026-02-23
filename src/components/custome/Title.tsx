import React from "react";

type TitleProps = {
  title: string;
  subTitle: string;
  className?: string;
  subTitleClassName?: string;
};

const Title: React.FC<TitleProps> = ({ title, subTitle, className ,subTitleClassName}) => {
  return (
    <div className={`text-center ${className}`}>
      <span className={`block text-primary  font-bold text-[20px]  text-xl md:text-3xl lg:text-[35px] ${className}`} >{title}</span>
      <span className={`block opacity-80 font-light text-[16px] md:text-[18px] ${subTitleClassName}`}>{subTitle}</span>
    </div>
  );
};

export default React.memo(Title);
