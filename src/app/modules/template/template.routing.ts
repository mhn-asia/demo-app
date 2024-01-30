import { Route } from "@angular/router";

export const templateRoutes: Route[] = [
	// Redirect empty path to 'main'
	{ path: "", pathMatch: "full", redirectTo: "template" },

	// {
	// 	path: "template",
	// 	loadChildren: () =>
	// 		import("app/modules/template/template.module").then(
	// 			(m) => m.TemplateModule
	// 		),
	// },

];
