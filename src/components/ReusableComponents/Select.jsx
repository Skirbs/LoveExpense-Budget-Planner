export default function Select({className, children, ...props}) {
  return (
    <select
      id="setting-currency"
      className={`${className || ""} appearance-none rounded-md drop-shadow-sm cursor-pointer`}>
      {children}
    </select>
  );
}
