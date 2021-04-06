// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatButtonModule} from '@angular/material/button';


// import {MatDatepickerModule} from '@angular/material/datepicker'; 
// import {MatStepperModule} from '@angular/material/stepper'; 
// import { MatIconModule } from '@angular/material/icon';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule} from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';

// import {MatCardModule} from '@angular/material/card'; 
// import { MatTabsModule } from '@angular/material/tabs';
// import { LoginComponent } from './login/login/login.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
   
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     MatStepperModule,
//     MatIconModule,
//     BrowserAnimationsModule,
//     MatButtonModule,
//     FormsModule,
//     ReactiveFormsModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatTabsModule,


//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


import {MatSelectModule} from '@angular/material/select'; 

import {MatToolbarModule} from '@angular/material/toolbar'; 

import {MatStepperModule} from '@angular/material/stepper'; 
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {MatCardModule} from '@angular/material/card'; 
import { MatTabsModule } from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox'; 

import {MatRadioModule} from '@angular/material/radio'; 
import {MatListModule} from '@angular/material/list'; 



import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatMenuModule} from '@angular/material/menu'; 


import {MatRippleModule} from '@angular/material/core'; 

import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatSliderModule} from '@angular/material/slider'; 



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatChipsModule,
    MatDatepickerModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSliderModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
