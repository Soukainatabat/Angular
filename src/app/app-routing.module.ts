import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatureComponent } from './candidature/candidature.component';
import {AppComponent} from "./app.component";
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'candidature', component: CandidatureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
