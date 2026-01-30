import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})

export class App {
  contacts: any[] = [];

  addContact(contact:any){
    this.contacts = [...this.contacts, contact];
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
  deleteContact(id:number){
    this.contacts = this.contacts.filter(x=> x.id !== id);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }


}
