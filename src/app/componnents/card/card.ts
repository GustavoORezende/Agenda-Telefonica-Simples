import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() contact!: Contact;
  @Output() delete = new EventEmitter<number>();
  onDelete(){
    this.delete.emit(this.contact.id);
  }
  @Output() edit = new EventEmitter<Contact>();
  onEdit(){
    this.edit.emit({...this.contact});
  }

}
