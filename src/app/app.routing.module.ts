import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesListComponent } from './courses/courses-list/courses-list.component';

const appRoutes: Routes = [
    { path: 'courses', component: CoursesListComponent },
    { path: '', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }