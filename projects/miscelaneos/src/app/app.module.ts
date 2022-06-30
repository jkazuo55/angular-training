import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ScopeCssComponent } from './components/scope-css/scope-css.component';
import { ClassesComponent } from './components/classes/classes.component';
import { HoverDirective } from './directives/hover.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';
import { DetailUserComponent } from './components/user/detail-user/detail-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    ScopeCssComponent,
    ClassesComponent,
    HoverDirective,
    NgSwitchComponent,
    HomeComponent,
    UserComponent,
    EditUserComponent,
    NewUserComponent,
    DetailUserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
