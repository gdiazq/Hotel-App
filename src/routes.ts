/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */

export const publicRoutes = [
    "/"
];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = [
    "/signin",
    "/signup",
]

/**
 * An array of routes that are used for the API.
 * These routes are prefixed with /api
 * @type {string[]}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default route to redirect to after a successful login.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";