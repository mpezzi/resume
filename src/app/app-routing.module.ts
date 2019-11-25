import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'resume', loadChildren: () => import('./modules/resume/resume.module').then(m => m.ResumeModule) },
  { path: '', pathMatch: 'full', redirectTo: 'resume' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
