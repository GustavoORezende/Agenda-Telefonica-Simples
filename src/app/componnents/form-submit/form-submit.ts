import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Contact } from '../../models/contact';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api';



@Component({
  selector: 'app-form-submit',
  standalone: false,
  templateUrl: './form-submit.html',
  styleUrls: ['./form-submit.scss'],
})
export class FormSubmit implements OnChanges {
  //Por que eu preciso definir contact aqui se ja importa o model?
  contact : Contact = {nome: '', telefone: ''};
  contacts: Contact[] = []
// Recebe estado de edição de Table(componente irmão)
  @Input() editingContact?: Contact;
  //trasmite evento de criação e update para App(componente pai)
  @Output() create = new EventEmitter<Contact>();
  @Output() update = new EventEmitter<Contact>();

  isDisabled = false;

  constructor(private readonly apiService: ApiService) {};

onSubmit(form?:NgForm) {
  if (form?.invalid) return;

  if (this.editingContact?.id) {
    // Se Conato existe, então é update
    //chama API e emite para App
    //Qual o propósito de isDisabled? Se for para evitar múltiplos cliques, não seria melhor desabilitar o botão de submit?
    this.isDisabled = true;
   this.apiService.updateContato({...this.contact, id: this.editingContact.id}).subscribe(
    (updated: Contact) => {
      this.update.emit(updated);
      this.resetForm(form);
      this.isDisabled = false;
    },
    (error) => {
      console.error('Erro ao atualizar', error);
      this.isDisabled = false;
    }
   );
} else {
  //chama API e emite para App
  this.isDisabled = true;
  this.apiService.addContato(this.contact).subscribe(
    (newContact: Contact) => {
      this.create.emit(newContact);
      this.resetForm(form);
      this.isDisabled = false;
    },
    (error) => {
      console.error('Erro ao criar', error);
      this.isDisabled = false;
    }
  );
 
}
}
  private resetForm(form?: NgForm) {
    form?.resetForm();
    this.contact = { nome: '', telefone: ''};
  }
ngOnChanges(changes: SimpleChanges) {
  if (changes['editingContact'] && this.editingContact) {
    this.contact = { ...this.editingContact }; // preenche inputs
  }
}

}



