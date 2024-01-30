import { formatDate } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FilteringExpressionsTree, FilteringLogic } from "@infragistics/igniteui-angular";
import { FhirConfigService } from "app/fhirconfig.service";

const fhirHttpOptions = {
	headers: new HttpHeaders({
		"cache-control": "no-cache",
		Accept: "application/fhir+json",
	}),
};

const EMPTY_STRING = "";
const NULL_VALUE = null;

export enum FILTER_OPERATION {
	CONTAINS = "contains=",
	STARTS_WITH = "startswith",
	ENDS_WITH = "endswith",
	EQUALS = "=",
	DOES_NOT_EQUAL = "!=",
	DOES_NOT_CONTAIN = "not contains",
	GREATER_THAN = "gt",
	LESS_THAN = "lt",
	LESS_THAN_EQUAL = "le",
	GREATER_THAN_EQUAL = "ge",
}

@Injectable({
	providedIn: "root",
})
export class TemplateService {
	
	private virtualizationArgsCache: any;
	private filteringArgsCache: any;
	private sortingArgsCache: any;

	// private _bundle: BehaviorSubject<fhir.r4.Bundle> = new BehaviorSubject(null);
	// public bundle$: Observable<fhir.r4.Bundle> = this._bundle.asObservable();

	/**
	 * Constructor
	 */
	constructor(
		private _httpClient: HttpClient,
		private _fhirConfigService: FhirConfigService,
	) {
		
	}

	// -----------------------------------------------------------------------------------------------------
	// @ Public Methods
	// -----------------------------------------------------------------------------------------------------


	// -----------------------------------------------------------------------------------------------------
	// @ Private Methods
	// -----------------------------------------------------------------------------------------------------
	private buildDataUrl(virtualizationArgs: any, filteringArgs: any, sortingArgs: any, searchForm: any): string {
		let baseQueryString = this._fhirConfigService.getFhirService() + "/Encounter?";
		let scrollingQuery = EMPTY_STRING;
		let orderQuery = EMPTY_STRING;
		let filterQuery = EMPTY_STRING;
		let query = EMPTY_STRING;
		let order = EMPTY_STRING;
		let filter = EMPTY_STRING;

		if (virtualizationArgs === null) {
			virtualizationArgs = this.virtualizationArgsCache;
		}
		this.virtualizationArgsCache = virtualizationArgs;

		if (filteringArgs === null) {
			filteringArgs = this.filteringArgsCache;
		}
		this.filteringArgsCache = filteringArgs;

		if (sortingArgs === null) {
			sortingArgs = this.sortingArgsCache;
		}
		this.sortingArgsCache = sortingArgs;

		if (sortingArgs && sortingArgs.length > 0) {
			sortingArgs.forEach((arg) => {
				if (order !== EMPTY_STRING) {
					order += ",";
				}
				order += this._buildSortExpression(arg);
			});
			orderQuery = `_sort=${order}`;
		}

		if (filteringArgs && filteringArgs.length > 0) {
			filteringArgs.forEach((columnFilter) => {
				if (filter !== EMPTY_STRING) {
					// filter += `${FilteringLogic[columnFilter.operator].toLowerCase()}`;
					filter += `&`;
				}

				// if (columnFilter.fieldName == "healthcare-service") {
				// filter += "HealthcareService:identifier=" + columnFilter.filteringOperands[0].searchVal[0];
				// } else if(columnFilter.fieldName == "location") {
				// filter += "actor=Location/" + columnFilter.filteringOperands[0].searchVal[0];
				// } else {
				filter += this._buildAdvancedFilterExpression(
					columnFilter.filteringOperands,
					columnFilter.operator
				);
				// }
			});

			filterQuery = `${filter}`;
		}

		if (virtualizationArgs) {
			scrollingQuery = this._buildScrollExpression(virtualizationArgs);
		}

		query += orderQuery !== EMPTY_STRING ? `&${orderQuery}` : EMPTY_STRING;
		query += filterQuery !== EMPTY_STRING ? `&${filterQuery}` : EMPTY_STRING;
		query += scrollingQuery !== EMPTY_STRING ? `&${scrollingQuery}` : EMPTY_STRING;

		baseQueryString += query;
		
		return baseQueryString;
	}

	private _buildSortExpression(sortingArgs): string {
		let sortingDirection: string;
		switch (sortingArgs.dir) {
			case 1: {
				sortingDirection = EMPTY_STRING;
				break;
			}
			case 2: {
				sortingDirection = "-";
				break;
			}
			default: {
				sortingDirection = EMPTY_STRING;
				break;
			}
		}

		let fieldName = sortingArgs.fieldName;
		return `${sortingDirection}${fieldName}`;
	}

	private _buildAdvancedFilterExpression(operands, operator): string {
		let filterExpression = EMPTY_STRING;
		operands.forEach((operand, index) => {
			if (operand instanceof FilteringExpressionsTree) {
				if (index > 0) {
					filterExpression += ` ${FilteringLogic[operator].toLowerCase()} `;
				}
				filterExpression += this._buildAdvancedFilterExpression(
					operand.filteringOperands,
					operand.operator
				);
				return filterExpression;
			}

			const value = operand.searchVal;
			let filterValue = value;
			let fieldNameCol = operand.fieldName;
			let fieldName = fieldNameCol;
			let filterString;

			if (filterExpression !== EMPTY_STRING) {
				filterExpression += ` ${FilteringLogic[operator].toLowerCase()} `;
			}
			
			switch(fieldName) {
				case "encounterId" : {
					fieldName = "identifier-value";
					break;
				};
			}
			
			switch (operand.condition.name) {
				case "contains": {
					filterString = `${fieldName}:${FILTER_OPERATION.CONTAINS}${filterValue}`;
					break;
				}
				case "startsWith": {
					filterString = `${FILTER_OPERATION.STARTS_WITH}(${fieldName},${filterValue})`;
					break;
				}
				case "endsWith": {
					filterString = `${FILTER_OPERATION.ENDS_WITH}(${fieldName},${filterValue})`;
					break;
				}
				case "equals": {
					filterString = `${fieldName}${FILTER_OPERATION.EQUALS}${filterValue}`;
					break;
				}
				case "doesNotEqual": {
					filterString = `${fieldName}${FILTER_OPERATION.DOES_NOT_EQUAL}${filterValue}`;
					break;
				}
				case "doesNotContain": {
					filterString = `${FILTER_OPERATION.DOES_NOT_CONTAIN}(${fieldName},${filterValue})`;
					break;
				}
				case "greaterThan": {
					filterString = `${fieldName}${FILTER_OPERATION.GREATER_THAN}${filterValue}`;
					break;
				}
				case "in": {
					let startDate;
					let endDate;
					filterString = `${fieldName}=ge${startDate}&${fieldName}=le${endDate}`;
					break;
				}
				case "greaterThanOrEqualTo": {
					filterString = `${fieldName}${FILTER_OPERATION.GREATER_THAN_EQUAL}${filterValue}`;
					break;
				}
				case "lessThan": {
					filterString = `${fieldName}${FILTER_OPERATION.LESS_THAN}${filterValue}`;
					break;
				}
				case "lessThanOrEqualTo": {
					filterString = `${fieldName}${FILTER_OPERATION.LESS_THAN_EQUAL}${filterValue}`;
					break;
				}
				case "empty": {
					filterString = `length(${fieldName})${FILTER_OPERATION.EQUALS}0`;
					break;
				}
				case "notEmpty": {
					filterString = `length(${fieldName})${FILTER_OPERATION.GREATER_THAN}0`;
					break;
				}
				case "null": {
					filterString = `${fieldName}${FILTER_OPERATION.EQUALS}${NULL_VALUE}`;
					break;
				}
				case "notNull": {
					filterString = `${fieldName}${FILTER_OPERATION.DOES_NOT_EQUAL}${NULL_VALUE}`;
					break;
				}
				// case "after" : {
				//     filterString = `date${FILTER_OPERATION.EQUALS}${FILTER_OPERATION.GREATER_THAN_EQUAL}${filterValue}`;
				//     break;
				// }
				// case "before" : {
				//     filterString = `&date${FILTER_OPERATION.EQUALS}${FILTER_OPERATION.LESS_THAN_EQUAL}${filterValue}`;
				//     break;
				// }
				case "before": {
					if (fieldName === "date") {
						let startDate = formatDate(filterValue.start, "yyyy-MM-dd", "en");
						filterString = `${fieldName}=${FILTER_OPERATION.LESS_THAN_EQUAL}${startDate}`;
					} else {
						filterString = `${fieldName}=${FILTER_OPERATION.LESS_THAN_EQUAL}${filterValue}`;
					}
					break;
				}
			}
			filterExpression += filterString;
		});

		return filterExpression;
	}

	private _buildScrollExpression(virtualizationArgs): string {
		let requiredChunkSize: number;
		const skip = virtualizationArgs.startIndex;
		requiredChunkSize = virtualizationArgs.chunkSize === 0 ? 11 : virtualizationArgs.chunkSize;
		const top = requiredChunkSize;

		return `_getpagesoffset=${skip}&_count=${top}&_total=accurate`;
	}
}