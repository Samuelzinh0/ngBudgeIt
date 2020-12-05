import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddBudgetFormComponent } from './add-budget-form/add-budget-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetListItemComponent } from './budget-list/budget-list-item/budget-list-item.component';
import { EditListItemModalComponent } from './edit-list-item-modal/edit-list-item-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AddBudgetFormComponent,
    BudgetListComponent,
    BudgetListItemComponent,
    EditListItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EditListItemModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
