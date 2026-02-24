import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
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
  message = '';
  sendMessage(){
  let phone = this.contact.telefone;
  const text = (this.message || '').trim();
  const encoded = text ? '?text=' + encodeURIComponent(text) : '';
  const url = `https://wa.me/${phone}${encoded}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  }

}
