import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personel } from '../DTO/Personel';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {
  private apiUrl = 'api/Personel'; 

  constructor(private http: HttpClient) { }

  getTumPersonel(): Observable<Personel[]> {
    return this.http.get<Personel[]>(this.apiUrl);
  }

  okuPersonel(sicilNumarasi: number) : Observable<Personel> {
    const url = `${this.apiUrl}/${sicilNumarasi}`;
    return this.http.get<Personel>(url);
  }

  personelEkle(personel: Personel): Observable<Personel> {
    return this.http.post<Personel>(this.apiUrl, personel);
  }

  personelGuncelle(personel: Personel): Observable<void> {
    return this.http.put<void>(this.apiUrl,personel);
  }

  personelSil(sicilNumarasi: number): Observable<void> {
    const url = `${this.apiUrl}/${sicilNumarasi}`;
    return this.http.delete<void>(url);
  }


}
