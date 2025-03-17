"use client"

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import clsx from "clsx";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return <Button disabled={pending} className={clsx("w-fit", pending && "pointer-events-none translate-y-1.5 opacity-50")}>{pending ? "Submitting..." : "Submit"}</Button>;
}
