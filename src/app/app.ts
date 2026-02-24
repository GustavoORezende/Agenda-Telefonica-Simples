import { ChangeDetectionStrategy, Component, ChangeDetectorRef, OnInit} from '@angular/core';
import { Contact } from './models/contact';
import { ApiService } from './services/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class App implements OnInit {
  isDisabled = false;
  contacts: Contact[] = [];
  editingContact?: Contact;
  constructor(private readonly apiService: ApiService,
    private readonly cdr: ChangeDetectorRef
  ){}
   ngOnInit(){
    this.apiService.getContatos().subscribe((data: Contact[]) => {
      this.contacts = data;
      this.cdr.markForCheck();
      console.log('Contatos carregados:', this.contacts);
    })
  }

  deleteContact(id:number){
    this.isDisabled = true;
    this.apiService.deleteContato(id).subscribe( ()  => {
    this.contacts = this.contacts.filter(x=> x.id !== id);
    this.cdr.markForCheck();
    this.isDisabled = false;  
    },
  (error) => {
    console.error('Erro no deleteContact:', error);
    this.isDisabled = false;
  }
);
  }
  
//recebe edit de Table
  onEdit(contact: Contact){
    this.editingContact = {...contact};
  }
//recebe update de FormSubmit
  onUpdate(updated: Contact){
    //atualiza lista local
  this.contacts = this.contacts.map(c => c.id === updated.id ? updated : c);
  this.editingContact = undefined; // fecha form
  localStorage.setItem('contacts', JSON.stringify(this.contacts));
  this.cdr.markForCheck();
  }

  //recebe create do FormSubmit
  addContact(contact: Contact){
    //adiciona à lista local
    this.contacts = [...this.contacts, contact];
    this.cdr.markForCheck();
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }

}
