import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/form-validation/page/page.component";
const STARTS_WITH_ROUTES: Routes = [
{
	path:':typeName',
	component:PageComponent
},
{
	path:':typeName/:templateDrivenType',
	component:PageComponent
}
];
export const STARTS_WITH_ROUTING: ModuleWithProviders = RouterModule.forChild(STARTS_WITH_ROUTES);