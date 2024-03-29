import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";

const routes: Routes = [
	{
		path	: "",
		component: MainComponent
	},
]

@NgModule({
	declarations: [
		MainComponent
	],
	imports: [
		RouterModule.forChild(routes),
	]
})
export class MainModule {}