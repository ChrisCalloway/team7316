import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//Import Components
import { AppComponent } from '../app/app.component';
import { AuthComponent } from '../auth/auth.component';
import { MapComponent } from '../map/map.component';
import { CannotFindPageComponent } from '../cannot-find-page/cannot-find-page.component';
import { EditPostComponent } from '../edit-post/edit-post.component';

//Import Guards
import { AdminGuard } from '../auth/admin.guard';
import { CanReadGuard } from '../auth/can-read.guard';

const appRoutes: Routes = [
  { path: 'mapview', component: MapComponent, canActivate: [CanReadGuard]},
  { path: 'authview', component: AuthComponent},
  { path: '', redirectTo: '/authview', pathMatch: 'full'},
  { path: '**', component: CannotFindPageComponent}
] 


@NgModule({
    imports: [
        RouterModule.forRoot(
          appRoutes, 
          { enableTracing: true})
    ],
    declarations: [],
    exports: [
      RouterModule
    ],
    providers: []
  })

  export class AppRoutingModule { }