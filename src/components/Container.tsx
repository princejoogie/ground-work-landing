import React from "react";

const Container: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={`container mx-auto px-4 2xl:px-20 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
