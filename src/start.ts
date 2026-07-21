import { clerkMiddleware } from "@clerk/tanstack-react-start/server";
import { createCsrfMiddleware, createStart } from "@tanstack/react-start";

// CSRF middleware to protect server functions from cross-site requests
const csrfMiddleware = createCsrfMiddleware({
	filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => {
	return {
		requestMiddleware: [csrfMiddleware, clerkMiddleware()],
	};
});
