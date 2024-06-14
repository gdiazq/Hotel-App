import type { Metadata } from "next";
import { Onest } from "next/font/google";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sign Up Page by Guillermo Diaz",
  description: "Sign Up Page for Hotel Managment App by Guillermo Diaz",
};

const LayoutSignUp = ({ children, }: { children: React.ReactNode;}) => {
  return (
    <html lang="en">
      <body className={onest.className}>
          {children}
      </body>
    </html>
  );
}

export default LayoutSignUp
