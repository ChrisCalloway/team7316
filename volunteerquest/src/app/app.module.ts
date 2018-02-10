//Modules
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { MatButtonModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../routing/app-routing.module';
import { AuthModule } from '../auth/auth.module';

//Configs
import { FirebaseConfig } from '../environments/firebase.config';
import { GoogleMapsConfig } from '../environments/googlemaps.config';

//Services
import { AuthService } from '../auth/auth.service';

//Components
import { AuthComponent } from '../auth/auth.component';
import { AppComponent } from './app.component';
import { MapComponent } from '../map/map.component';
import { CannotFindPageComponent } from '../cannot-find-page/cannot-find-page.component';
import { EditPostComponent } from '../edit-post/edit-post.component';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
//import { ViewEventsComponent } from '../view-events/view-events.component';
import { ManageEventsComponent } from '../manage-events/manage-events.component';
//import { VolunteerEventComponent } from '../volunteer-event/volunteer-event.component';
import { EventEditComponent } from './event-edit/event-edit.component';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(FirebaseConfig.team7316_firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: GoogleMapsConfig.googleMapsAPI.apiKey.valueOf()
    }),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AuthModule
  ],
  declarations: [
    AppComponent,
    AuthComponent,
    MapComponent, 
    CannotFindPageComponent,
    EditPostComponent,
    AuthDialogComponent,
    ManageEventsComponent,
    AuthDialogComponent,
    EventEditComponent
  ],
  entryComponents: [AuthDialogComponent, EventEditComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
