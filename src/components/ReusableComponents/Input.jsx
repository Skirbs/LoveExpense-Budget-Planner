export default function Input({className, ...props}) {
  return (
    <input
      className={`drop-shadow-lg rounded-lg outline-none px-2.5 py-1 ${className || ""}`}
      {...props}></input>
  );
}
