import {forwardRef} from "react";

export default forwardRef(function Select({className, children, ...props}, ref) {
  return (
    <select
      ref={ref}
      id="setting-currency"
      className={`${className || ""} appearance-none rounded-md drop-shadow-sm cursor-pointer`}
      {...props}>
      {children}
    </select>
  );
});
