import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private contentListSubject = new BehaviorSubject<any[]>([]);
  contentList$ = this.contentListSubject.asObservable();

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  private errorMessageSubject = new BehaviorSubject<string | null>(null);
  errorMessage$ = this.errorMessageSubject.asObservable();

  private apiUrl = 'http://localhost:8080/api/content'; 

  constructor(private http: HttpClient) { }

  getContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  fetchContents() {
    this.isLoadingSubject.next(true);
    this.errorMessageSubject.next(null);

    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        console.log('Fetched content:', data);
        this.contentListSubject.next(data);
        this.isLoadingSubject.next(false);
      },
      error: (error) => {
        console.error('Error fetching content:', error);
        this.errorMessageSubject.next('Failed to load content. Please try again later.');
        this.isLoadingSubject.next(false);
      },
    });
  }

  addContent(content: any): Observable<any> {
    console.log(content);
    return this.http.post(`${this.apiUrl}`, content, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  updateContent(id: string, updatedContent: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedContent)
  }

  deleteContent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}