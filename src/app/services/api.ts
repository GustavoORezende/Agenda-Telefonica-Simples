import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Contact{
  id?: number;
  name: string;
  phoneNumber: string;

}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private readonly apiUrl = 'https://localhost:7089/api/contatos'


constructor(private readonly http: HttpClient) {}

getContatos(): Observable<Contact[]> {
  return this.http.get<Contact[]>(this.apiUrl);
}

getContatoById(id: number): Observable<Contact>{
  return this.http.get<Contact>(`${this.apiUrl}/${id}`);
}

addContato(contact: Contact): Observable<Contact>{
  return this.http.post<Contact>(this.apiUrl, contact);
}

updateContato(contato: Contact): Observable<any> {
    return this.http.put(`${this.apiUrl}/${contato.id}`, contato);
  }

   deleteContato(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
};
