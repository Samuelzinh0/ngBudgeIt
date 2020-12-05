import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItem } from 'src/public/models/budget-item.model';

@Component({
  selector: 'app-edit-list-item-modal',
  templateUrl: './edit-list-item-modal.component.html',
  styleUrls: ['./edit-list-item-modal.component.scss']
})
export class EditListItemModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditListItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItem) {
    this.dialogRef.close(updatedItem);
  }

}
