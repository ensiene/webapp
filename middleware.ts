import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
	locales: ["en", "pt", "es"],
	defaultLocale: "en",
	/* urlMappingStrategy: "rewriteDefault", */
});

export function middleware(request: NextRequest) {
	return I18nMiddleware(request);
}

export { default } from "next-auth/middleware";

export const config = {
	matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"]
};
