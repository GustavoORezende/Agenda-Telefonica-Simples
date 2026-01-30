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
  Contact = {
  name: '',
  phoneNumber: '',
}
  contacts: Contact[] = []
  @Output() create = new EventEmitter<Contact>()
 

onSubmit(form?:NgForm) {
  const newContact = {id: Date.now(), ...this.Contact}
  this.create.emit(newContact);
form?.resetForm();
this.Contact = { name: '', phoneNumber: ''}
};

}