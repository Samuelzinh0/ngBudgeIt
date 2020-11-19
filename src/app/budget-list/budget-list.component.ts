import { Component, Input, OnInit } from '@angular/core';
import { BudgetItem } from 'src/public/models/budget-item.model';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
