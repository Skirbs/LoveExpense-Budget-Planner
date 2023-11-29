export default function Card({children, className}) {
  return (
    <div className={`drop-shadow-[0_12px_12px_rgba(0,0,0,0.25)] ${className || ""}`}>
      {children}
    </div>
  );
}
