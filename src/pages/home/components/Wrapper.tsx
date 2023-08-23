import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Wrapper({ children }: Props) {
  return <div className="w-full max-w-[1536px] mx-auto">{children}</div>;
}
