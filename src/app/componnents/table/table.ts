import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../../models/contact';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table implements OnInit {
  contacts: Contact[] = [];
  editingContact?: Contact;
  constructor(private readonly apiService: ApiService){}
  //Eventos a serem passado para App = componente pai
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Contact>();

  ngOnInit(){
    this.apiService.getContatos().subscribe((data: Contact[]) => {
      this.contacts = data;
      console.log('Contatos carregados:', this.contacts);
    })
  }
   onCardEdit(contact: Contact){
    ////reencaminha o evento para App = componente pai
   this.edit.emit(contact);
  }
   onCardDelete(id:number){
    //reencaminha o evento para App = componente pai
  this.delete.emit(id);
  }


}


