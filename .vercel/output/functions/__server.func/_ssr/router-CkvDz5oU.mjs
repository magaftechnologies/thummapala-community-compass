import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CkvDz5oU.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-RYnjlNpS.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Digital Thummapala | Thummapala — Our Village. Our People. Our Future." },
			{
				name: "description",
				content: "Digital Thummapala — a digital platform for Thummapala village, connecting its people, education, agriculture, sports, opportunities, events and future initiatives."
			},
			{
				name: "author",
				content: "Digital Thummapala"
			},
			{
				property: "og:title",
				content: "Digital Thummapala | Thummapala — Our Village. Our People. Our Future."
			},
			{
				property: "og:description",
				content: "A digital platform connecting Thummapala village, its people, education, agriculture, sports, opportunities and future."
			},
			{
				property: "og:image",
				content: "/images/digital-thummapala-village.png"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: "/images/digital-thummapala-village.png"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800&family=Noto+Sans+Telugu:wght@400;500;600&family=Noto+Serif+Telugu:wght@400;500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.svg"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$11 = () => import("./routes-B_RkGbyC.mjs");
var Route$11 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Digital Thummapala | Thummapala — Our Village. Our People. Our Future." },
		{
			name: "description",
			content: "Digital Thummapala — a digital platform for Thummapala village, connecting its people, education, agriculture, sports, opportunities, events and future initiatives."
		},
		{
			property: "og:title",
			content: "Digital Thummapala | Thummapala Village"
		},
		{
			property: "og:description",
			content: "A digital platform connecting Thummapala village, its people, education, agriculture, sports, opportunities and future."
		},
		{
			property: "og:image",
			content: "/images/digital-thummapala-village.png"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:image",
			content: "/images/digital-thummapala-village.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./activities-CpbP26d_.mjs");
var Route$10 = createFileRoute("/activities")({
	head: () => ({ meta: [
		{ title: "Village Activities | Thummapala" },
		{
			name: "description",
			content: "A glimpse of what is happening around Thummapala village."
		},
		{
			property: "og:title",
			content: "Village Activities | Thummapala"
		},
		{
			property: "og:description",
			content: "A glimpse of what is happening around Thummapala village."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./agrotech-BIcLzZoX.mjs");
var Route$9 = createFileRoute("/agrotech")({
	head: () => ({ meta: [
		{ title: "Agrotech | Thummapala" },
		{
			name: "description",
			content: "Better ideas for better farming — agriculture learning and technology in Thummapala."
		},
		{
			property: "og:title",
			content: "Agrotech | Thummapala"
		},
		{
			property: "og:description",
			content: "Better ideas for better farming — agriculture learning and technology in Thummapala."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-DQKjDgrv.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact | Thummapala" },
		{
			name: "description",
			content: "Have a question or an idea? Get in touch and be part of Thummapala's journey."
		},
		{
			property: "og:title",
			content: "Contact | Thummapala"
		},
		{
			property: "og:description",
			content: "Have a question or an idea? Get in touch and be part of Thummapala's journey."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./education-G4coCYwI.mjs");
var Route$7 = createFileRoute("/education")({
	head: () => ({ meta: [
		{ title: "Education | Thummapala" },
		{
			name: "description",
			content: "School support, extra learning, digital skills and career guidance for Thummapala students."
		},
		{
			property: "og:title",
			content: "Education | Thummapala"
		},
		{
			property: "og:description",
			content: "School support, extra learning, digital skills and career guidance for Thummapala students."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./events-CDtJTz8A.mjs");
var Route$6 = createFileRoute("/events")({
	head: () => ({ meta: [
		{ title: "Events | Thummapala" },
		{
			name: "description",
			content: "Upcoming community events in Thummapala, Anakapalli."
		},
		{
			property: "og:title",
			content: "Events | Thummapala"
		},
		{
			property: "og:description",
			content: "Upcoming community events in Thummapala, Anakapalli."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./gallery-CnDmLPWj.mjs");
var Route$5 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery | Thummapala" },
		{
			name: "description",
			content: "A few moments from Thummapala — village, learning, farms and sports."
		},
		{
			property: "og:title",
			content: "Gallery | Thummapala"
		},
		{
			property: "og:description",
			content: "A few moments from Thummapala — village, learning, farms and sports."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./library-DcFcpu69.mjs");
var Route$4 = createFileRoute("/library")({
	head: () => ({ meta: [
		{ title: "Thummapala Library | Digital Thummapala" },
		{
			name: "description",
			content: "Explore Thummapala Library through photographs of Library Week, readers and community gatherings centered on reading, learning and participation."
		},
		{
			property: "og:title",
			content: "Thummapala Library | Digital Thummapala"
		},
		{
			property: "og:description",
			content: "Photographs of Thummapala Library Week, readers and community gatherings around reading and learning."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./opportunities-CjK995v5.mjs");
var Route$3 = createFileRoute("/opportunities")({
	head: () => ({ meta: [
		{ title: "Opportunities | Digital Thummapala" },
		{
			name: "description",
			content: "Jobs, scholarships, internships and training opportunities are coming soon to Digital Thummapala."
		},
		{
			property: "og:title",
			content: "Opportunities | Digital Thummapala"
		},
		{
			property: "og:description",
			content: "Jobs, scholarships, internships and training opportunities are coming soon to Digital Thummapala."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./our-village-BQWXoNV1.mjs");
var Route$2 = createFileRoute("/our-village")({
	head: () => ({ meta: [
		{ title: "Our Village | Thummapala" },
		{
			name: "description",
			content: "Learn about Thummapala in Anakapalli — its people, farms, schools and community spirit."
		},
		{
			property: "og:title",
			content: "Our Village | Thummapala"
		},
		{
			property: "og:description",
			content: "Learn about Thummapala in Anakapalli — its people, farms, schools and community spirit."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./sports-duUS6ZAR.mjs");
var Route$1 = createFileRoute("/sports")({
	head: () => ({ meta: [
		{ title: "Sports | Thummapala" },
		{
			name: "description",
			content: "Kho-Kho and village sports in Thummapala — play, compete and grow."
		},
		{
			property: "og:title",
			content: "Sports | Thummapala"
		},
		{
			property: "og:description",
			content: "Kho-Kho and village sports in Thummapala — play, compete and grow."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./stories-DV_6ikVd.mjs");
var Route = createFileRoute("/stories")({
	head: () => ({ meta: [
		{ title: "Success Stories | Thummapala" },
		{
			name: "description",
			content: "Stories of people from Thummapala who are moving forward."
		},
		{
			property: "og:title",
			content: "Success Stories | Thummapala"
		},
		{
			property: "og:description",
			content: "Stories of people from Thummapala who are moving forward."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$11.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	ActivitiesRoute: Route$10.update({
		id: "/activities",
		path: "/activities",
		getParentRoute: () => Route$12
	}),
	AgrotechRoute: Route$9.update({
		id: "/agrotech",
		path: "/agrotech",
		getParentRoute: () => Route$12
	}),
	ContactRoute: Route$8.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$12
	}),
	EducationRoute: Route$7.update({
		id: "/education",
		path: "/education",
		getParentRoute: () => Route$12
	}),
	EventsRoute: Route$6.update({
		id: "/events",
		path: "/events",
		getParentRoute: () => Route$12
	}),
	GalleryRoute: Route$5.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$12
	}),
	LibraryRoute: Route$4.update({
		id: "/library",
		path: "/library",
		getParentRoute: () => Route$12
	}),
	OpportunitiesRoute: Route$3.update({
		id: "/opportunities",
		path: "/opportunities",
		getParentRoute: () => Route$12
	}),
	OurVillageRoute: Route$2.update({
		id: "/our-village",
		path: "/our-village",
		getParentRoute: () => Route$12
	}),
	SportsRoute: Route$1.update({
		id: "/sports",
		path: "/sports",
		getParentRoute: () => Route$12
	}),
	StoriesRoute: Route.update({
		id: "/stories",
		path: "/stories",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
