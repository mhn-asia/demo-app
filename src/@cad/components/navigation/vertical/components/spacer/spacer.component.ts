import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CadVerticalNavigationComponent } from '@cad/components/navigation/vertical/vertical.component';
import { CadNavigationService } from '@cad/components/navigation/navigation.service';
import { CadNavigationItem } from '@cad/components/navigation/navigation.types';

@Component({
    selector       : 'cad-vertical-navigation-spacer-item',
    templateUrl    : './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CadVerticalNavigationSpacerItemComponent implements OnInit, OnDestroy
{
    @Input() item: CadNavigationItem;
    @Input() name: string;

    private _cadVerticalNavigationComponent: CadVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _cadNavigationService: CadNavigationService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent navigation component
        this._cadVerticalNavigationComponent = this._cadNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._cadVerticalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
