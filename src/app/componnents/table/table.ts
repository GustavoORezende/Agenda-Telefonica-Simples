import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from '../../models/contact';


@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.html',
  styleUrl: './table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Table  {
 
  //Eventos a serem passado para App = componente pai
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Contact>();
  //Recebe contatos de App
  @Input() contacts: Contact[] = [];
 
   onCardEdit(contact: Contact){
    ////reencaminha o evento para App = componente pai
   this.edit.emit(contact);
  }
   onCardDelete(id:number){
    //reencaminha o evento para App = componente pai
  this.delete.emit(id);
  }


}


