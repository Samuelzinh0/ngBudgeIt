import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/public/models/budget-item.model';
import { EditListItemModalComponent } from '../edit-list-item-modal/edit-list-item-modal.component';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})

export class BudgetListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDelBtnClicked(item: BudgetItem) {
    this.delete.emit(item);
  }

  onItemClicked(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditListItemModalComponent, {
      width: '480px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {      
        this.update.emit({
          old: item,
          new: result
        })
      }
    })
  }
}

export interface UpdateEvent { 
  old: BudgetItem;
  new: BudgetItem;
}