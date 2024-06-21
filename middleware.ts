import NextAuth from "next-auth"
import authConfig from "./auth.config"

const { auth } = NextAuth(authConfig);

export default auth ((req) => {
    const isLoggidIn = !!req.auth;
    console.log("Route: ", req.nextUrl.pathname);
    console.log("Is logged in: ", isLoggidIn);
})

export const config = {
    matcher: ['/((?.+\\.[\\w]+$|_next).*', '/', '/(api|trpc)(.*)']
}