import { Component, ViewEncapsulation, OnInit, OnDestroy, SimpleChanges } from "@angular/core";

@Component({
	selector: "template",
	templateUrl: "./template.component.html",
	styleUrls: ["./template.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class TemplateComponent implements OnInit, OnDestroy {
	
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
	ngOnChanges(changes: SimpleChanges) { // alternative if(changes["list"]) {
		
	}

	// -----------------------------------------------------------------------------------------------------
	// @ Public methods
	// -----------------------------------------------------------------------------------------------------
	
	
	// -----------------------------------------------------------------------------------------------------
	// @ Private methods
	// -----------------------------------------------------------------------------------------------------
	
}
