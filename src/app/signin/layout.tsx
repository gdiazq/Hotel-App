import { Onest } from "next/font/google";
import SignIn from "./page";

const onest = Onest({ subsets: ["latin"] });

const LayoutSignIn = ({ children } : { children: React.ReactNode;}) => {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={onest.className}>
        <SignIn />
      </body>
    </html>
  );
}

export default LayoutSignIn
