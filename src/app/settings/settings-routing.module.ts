import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';

const routes: Routes = [
  {path:'',redirectTo:'reset',pathMatch:'full'},
  {path:'reset',component:ResetPasswordComponent},
  {path:'forget',component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
