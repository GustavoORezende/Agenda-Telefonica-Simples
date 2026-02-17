import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  constructor(private readonly apiService: ApiService){}
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Contact>();

  ngOnInit(){
    this.apiService.getContatos().subscribe((data: Contact[]) => {
      this.contacts = data;
      console.log('Contatos carregados:', this.contacts);
    })
  }
   onCardEdit(contact: Contact){
    this.edit.emit(contact);
  }
   onCardDelete(id:number){
  this.delete.emit(id);
}

}
