import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = "https://jsonplaceholder.typicode.com/photos/"

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser() {
        return this.http
            .get<Photo[]>(API);
    }

    listFromUserPaginated(page: number) {
        const params = new HttpParams()
            .append('page', page.toString());
    
        return this.http
            .get<Photo[]>(API, { params: params });
    }
}