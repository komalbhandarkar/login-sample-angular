import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './componants/log-in/log-in.component';
import { RegisterComponent } from './componants/register/register.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:'LogIn',pathMatch:'full'
  },
  {
    path:'LogIn',
    component:LogInComponent,
  },
  {
    path:"register",
    component:RegisterComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
