import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  @Input() contacts: Contact[] = [];
   @Output() delete = new EventEmitter<number>()
   onDelete(id:number){
  this.delete.emit(id);
}

}
