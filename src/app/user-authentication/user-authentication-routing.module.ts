import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAuthenticationComponent } from './user-authentication.component';

const routes: Routes = [
    {
        path: '',
        component: UserAuthenticationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserAuthenticationRoutingModule {

}
