import { Onest } from "next/font/google";
import SignIn from "./page";

const onest = Onest({ subsets: ["latin"] });

const LayoutSignIn = ({ children } : { children: React.ReactNode;}) => {
  return (
    <div className={onest.className}>
      <SignIn />
    </div>
  );
}

export default LayoutSignIn
