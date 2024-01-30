import { Component, ViewEncapsulation, OnInit, OnDestroy, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "main",
	templateUrl: "./main.component.html",
	// styleUrls: ["./main.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit, OnDestroy {
	
	/**
	 * Variable declaration (private, public, @Input, @Output, @ViewChildren)
	 *  will always located on top of constructor
	 */
	
	
	
	/**
	 * Constructor
	 */
	constructor(
		private _router: Router,
		private _activatedRoute: ActivatedRoute,
	) {}
	
	// -----------------------------------------------------------------------------------------------------
	// @ Lifecycle hooks
	// -----------------------------------------------------------------------------------------------------

	/**
	 * On init
	 */
	ngOnInit(): void {
		console.log("init main");
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {

	}
	
	/**
	 * On changes
	 * Note: ngOnChanges trigger before ngOnInit
	 */
	ngOnChanges(changes: SimpleChanges) {
	}

	// -----------------------------------------------------------------------------------------------------
	// @ Public methods
	// -----------------------------------------------------------------------------------------------------







	// -----------------------------------------------------------------------------------------------------
	// @ Private methods
	// -----------------------------------------------------------------------------------------------------
	
}
