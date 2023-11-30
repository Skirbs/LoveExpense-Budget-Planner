import {forwardRef} from "react";

export default forwardRef(function Input({className, ...props}, ref) {
  return (
    <input
      ref={ref}
      className={`drop-shadow-lg rounded-lg outline-none px-2.5 py-1 ${className || ""}`}
      {...props}></input>
  );
});
