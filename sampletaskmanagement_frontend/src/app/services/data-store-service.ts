import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataStoreService {
    name: BehaviorSubject<String> = new BehaviorSubject<String>('test');
}
