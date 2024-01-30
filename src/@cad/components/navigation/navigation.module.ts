import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CadScrollbarModule } from '@cad/directives/scrollbar/public-api';
import { CadHorizontalNavigationBasicItemComponent } from '@cad/components/navigation/horizontal/components/basic/basic.component';
import { CadHorizontalNavigationBranchItemComponent } from '@cad/components/navigation/horizontal/components/branch/branch.component';
import { CadHorizontalNavigationDividerItemComponent } from '@cad/components/navigation/horizontal/components/divider/divider.component';
import { CadHorizontalNavigationSpacerItemComponent } from '@cad/components/navigation/horizontal/components/spacer/spacer.component';
import { CadHorizontalNavigationComponent } from '@cad/components/navigation/horizontal/horizontal.component';
import { CadVerticalNavigationAsideItemComponent } from '@cad/components/navigation/vertical/components/aside/aside.component';
import { CadVerticalNavigationBasicItemComponent } from '@cad/components/navigation/vertical/components/basic/basic.component';
import { CadVerticalNavigationCollapsableItemComponent } from '@cad/components/navigation/vertical/components/collapsable/collapsable.component';
import { CadVerticalNavigationDividerItemComponent } from '@cad/components/navigation/vertical/components/divider/divider.component';
import { CadVerticalNavigationGroupItemComponent } from '@cad/components/navigation/vertical/components/group/group.component';
import { CadVerticalNavigationSpacerItemComponent } from '@cad/components/navigation/vertical/components/spacer/spacer.component';
import { CadVerticalNavigationComponent } from '@cad/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        CadHorizontalNavigationBasicItemComponent,
        CadHorizontalNavigationBranchItemComponent,
        CadHorizontalNavigationDividerItemComponent,
        CadHorizontalNavigationSpacerItemComponent,
        CadHorizontalNavigationComponent,
        CadVerticalNavigationAsideItemComponent,
        CadVerticalNavigationBasicItemComponent,
        CadVerticalNavigationCollapsableItemComponent,
        CadVerticalNavigationDividerItemComponent,
        CadVerticalNavigationGroupItemComponent,
        CadVerticalNavigationSpacerItemComponent,
        CadVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        CadScrollbarModule
    ],
    exports     : [
        CadHorizontalNavigationComponent,
        CadVerticalNavigationComponent
    ]
})
export class CadNavigationModule
{
}
