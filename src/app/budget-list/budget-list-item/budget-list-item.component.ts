import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/public/models/budget-item.model';

@Component({
  selector: 'app-budget-list-item',
  templateUrl: './budget-list-item.component.html',
  styleUrls: ['./budget-list-item.component.scss']
})
export class BudgetListItemComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() delBtnClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelBtnClick() {
    this.delBtnClick.emit();
  }

}
