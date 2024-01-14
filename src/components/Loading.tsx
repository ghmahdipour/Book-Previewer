import React from "react";
import classNames from "classnames";

interface LoadingProps {
  tag?: string;
  className?: string;
  size?: "lg" | "md" | "sm";
  color?: string;
  children?: any;
}

const Loading = (props: LoadingProps) => {
  const children = props.children || null;
  const Tag: any = props.tag || "div";
  const color = props.color || "#5D5FEF";
  const size = props.size || "";

  return (
    <Tag
      role="status"
      className={classNames(
        ["spinner-grow"],
        [`text-${color}`],
        { [`avatar-${size}|`]: size },
        props.className
      )}
    >
      {children}
    </Tag>
  );
};

Loading.defaultProps = {
  tag: "div"
};

export default Loading;
