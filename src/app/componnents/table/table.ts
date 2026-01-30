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
  @Output() edit = new EventEmitter<Contact>();
   onCardEdit(contact: Contact){
    this.edit.emit(contact);
  }
   onCardDelete(id:number){
  this.delete.emit(id);
}

}
