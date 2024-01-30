import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoComponent } from "./demo.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
	{
		path	: "demo",
		component: DemoComponent,
		children: [
			{
				path	: "main",
				component: MainComponent
			},
		]
	},
]

@NgModule({
	declarations: [
		DemoComponent,
		MainComponent,
	],
	imports: [
		RouterModule.forChild(routes),
	]
})
export class DemoModule {}