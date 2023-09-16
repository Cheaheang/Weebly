import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import HomePage from './home-page/home-page.component'
const routes: Routes = [
  {pathMatch:'full' , path: 'HomePage', redirectTo:'HomePage'},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
