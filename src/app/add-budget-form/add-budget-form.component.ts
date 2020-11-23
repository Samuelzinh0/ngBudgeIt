import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/public/models/budget-item.model';

@Component({
  selector: 'app-add-budget-form',
  templateUrl: './add-budget-form.component.html',
  styleUrls: ['./add-budget-form.component.scss']
})
export class AddBudgetFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', null);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
