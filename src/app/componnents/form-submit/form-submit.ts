import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Contact } from '../../models/contact';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-form-submit',
  standalone: false,
  templateUrl: './form-submit.html',
  styleUrl: './form-submit.scss',
})
export class FormSubmit {
  contact: Contact = {
  name: '',
  phoneNumber: '',
}
  contacts: Contact[] = []
  @Output() create = new EventEmitter<Contact>()
 isDisabled = false;

onSubmit(form?:NgForm) {
  if (form?.invalid) return;
  if (this.editingContact?.id) {
  this.update.emit({...this.contact, id: this.editingContact.id});
} else {
  const newContact = {id: Date.now(), ...this.contact}
  this.create.emit(newContact);
 
}
  
  
  form?.resetForm();
  this.contact = { name: '', phoneNumber: ''}
};

@Input() editingContact?: Contact;
@Output() update = new EventEmitter<Contact>();

ngOnChanges(changes: SimpleChanges) {
  if (changes['editingContact'] && this.editingContact) {
    this.contact = { ...this.editingContact }; // preenche inputs
  }
}
}