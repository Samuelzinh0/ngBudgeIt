import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddBudgetFormComponent } from './add-budget-form/add-budget-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetListItemComponent } from './budget-list/budget-list-item/budget-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AddBudgetFormComponent,
    BudgetListComponent,
    BudgetListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
