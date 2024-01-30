import { Component, ViewEncapsulation, OnInit, OnDestroy, SimpleChanges } from "@angular/core";

@Component({
	selector: "demo",
	templateUrl: "./demo.component.html",
	// styleUrls: ["./demo.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class DemoComponent implements OnInit, OnDestroy {
	
	/**
	 * Variable declaration (private, public, @Input, @Output, @ViewChildren)
	 *  will always located on top of constructor
	 */
	
	
	
	/**
	 * Constructor
	 */
	constructor() {}
	
	// -----------------------------------------------------------------------------------------------------
	// @ Lifecycle hooks
	// -----------------------------------------------------------------------------------------------------

	/**
	 * On init
	 */
	ngOnInit(): void {
		console.log("init novice");
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
