export default function Button({children, className, outline, opacityChange, ...props}) {
  return (
    <button
      className={`${className} w-fit px-3 py-2 ${
        outline ? "border-2 border-green-800" : "bg-green-800"
      } rounded-lg drop-shadow-[0_8px_8px_rgba(0,0,0,0.25)] transition-all duration-100 ease-out hover:px-4  ${
        opacityChange ? "opacity-80  active:opacity-70 hover:opacity-100" : ""
      }`}
      {...props}>
      {children}
    </button>
  );
}
