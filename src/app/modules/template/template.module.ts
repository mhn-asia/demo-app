import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplateComponent } from "./template.component";
// import { templateRoutes } from "./template.routing";

const routes: Routes = [
	{
		path	: "template",
		component: TemplateComponent,
		children: [
			// 	path: "child",
			// 	loadChildren: () =>
			// 		import("app/modules/../child.module").then(
			// 			(m) => m.ChildModule
			// 		),
			// },
		],
	},
]

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forChild(routes),
		// RouterModule.forRoot(templateRoutes),
	]
})
export class TemplateModule {}