import { Component, EventEmitter, Output } from '@angular/core';
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
  const newContact = {id: Date.now(), ...this.contact}
  this.create.emit(newContact);
form?.resetForm();
this.contact = { name: '', phoneNumber: ''}
};

}