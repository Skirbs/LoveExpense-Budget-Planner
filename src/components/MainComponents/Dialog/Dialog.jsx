import {useRef, forwardRef, useImperativeHandle} from "react";
import Card from "../../ReusableComponents/Card";

export default forwardRef(function Dialog({children, className, header, ...props}, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      Open() {
        dialogRef.current.showModal(); /* Check After A While IF Error Still Pops Up */
      },
    };
  });

  return (
    <dialog
      ref={dialogRef}
      className={`${className} z-10 bg-transparent rounded-xl outline-none backdrop:bg-black backdrop:opacity-25 open:animate-fade-up`}
      {...props}>
      <Card className="bg-green-900 flex flex-col items-center p-2 rounded-xl">
        <form method="dialog">
          <button className="absolute top-1 right-3 text-xl outline-none">x</button>
        </form>

        <p className="font-medium text-2xl w-full text-center border-b-2 border-b-green-950">
          {header}
        </p>

        {children}
      </Card>
    </dialog>
  );
});
