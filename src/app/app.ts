import { Component, signal } from '@angular/core';
import { Contact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})

export class App {
  contacts: Contact[] = [];
  editingContact?: Contact;

  addContact(contact:Contact){
    this.contacts = [...this.contacts, contact];
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
  deleteContact(id:number){
    this.contacts = this.contacts.filter(x=> x.id !== id);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  onEdit(contact: Contact){
    this.editingContact = {...contact};
  }
  onUpdate(updated: Contact){
    this.contacts = this.contacts.map(c => c.id === updated.id ? updated : c);
  this.editingContact = undefined;
    localStorage.setItem('contacts', JSON.stringify(this.contacts));}

}
