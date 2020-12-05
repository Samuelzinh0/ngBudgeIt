import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/public/models/budget-item.model';
import { UpdateEvent } from '../budget-list/budget-list.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  overallBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.overallBudget += newItem.quantity;
  }
  
  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.overallBudget -= item.quantity;
  }

  updateItem(updateEvent: UpdateEvent){
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

    this.overallBudget -= updateEvent.old.quantity;
    this.overallBudget += updateEvent.new.quantity;
  }
}
