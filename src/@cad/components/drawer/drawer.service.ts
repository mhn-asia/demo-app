import { Injectable } from '@angular/core';
import { CadDrawerComponent } from '@cad/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class CadDrawerService
{
    private _componentRegistry: Map<string, CadDrawerComponent> = new Map<string, CadDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: CadDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): CadDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
