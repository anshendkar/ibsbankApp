import { Routes } from '@angular/router';
import { AccountOpeningComponent } from './components/account-opening/account-opening.component';

export const routes: Routes = [
    {path:'/open-account' , component: AccountOpeningComponent},
    {path:'', component: AccountOpeningComponent , pathMatch:'full'}

];
