import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { BtnType } from "../lib/types";

export default function ButtonComp({
  children,
  color,
  className,
  onClick,
  type,
}: BtnType) {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={clsx("w-full", className)}
      size="md"
      radius="sm"
      color={color}
      variant="shadow"
    >
      {children}
    </Button>
  );
}
