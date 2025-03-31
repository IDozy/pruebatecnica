import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/persons`);
  }

  deleteCharacter(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/persons/${id}`);
  }
  createCharacter(character: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/persons`, character);
  }

}
