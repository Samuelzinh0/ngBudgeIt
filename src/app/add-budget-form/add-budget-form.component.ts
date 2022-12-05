import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChannelItem } from 'src/public/models/channel-item.model';

@Component({
  selector: 'app-add-budget-form',
  templateUrl: './add-budget-form.component.html',
  styleUrls: ['./add-budget-form.component.scss']
})
export class AddBudgetFormComponent implements OnInit {

  @Input() item: ChannelItem = new ChannelItem('', null);
  @Output() formSubmit: EventEmitter<ChannelItem> = new EventEmitter<ChannelItem>();

  isNewItem: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
