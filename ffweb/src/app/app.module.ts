import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { MultiSelectModule, DropdownModule } from 'primeng/primeng';
import { CustomerComponent } from './customer/customer.component';
import { CoursesComponent } from './courses/courses.component';
import { ObjectviewerComponent } from './objectviewer/objectviewer.component';
import { StlModelViewerModule } from 'angular-stl-model-viewer';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { RecaptchaModule } from 'angular-google-recaptcha';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactusComponent,
    CustomerComponent,
    CoursesComponent,
    ObjectviewerComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    DropdownModule,
    StlModelViewerModule,
    RecaptchaModule.forRoot({
            siteKey: '6LdXM7cUAAAAABfzIOJzEaRyo9xSil1xCOqKUIWp',
        }),
    MatButtonModule,
    MatCardModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
