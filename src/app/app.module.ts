import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MagnifierDirective } from './magnifier.directive';
import { YearPipe } from './year.pipe';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {MatSelectModule} from '@angular/material/select';
import { InputSectionComponent } from './input-section/input-section.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MagnifierDirective,
    YearPipe,
    TableComponent,
    NavbarComponent,
    DropdownComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
