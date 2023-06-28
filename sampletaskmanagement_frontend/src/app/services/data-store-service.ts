import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GeneralFormData } from '../components/general-form/general-form.component';

@Injectable({
    providedIn: 'root'
})
export class DataStoreService {
    name: BehaviorSubject<String | undefined> = new BehaviorSubject<String | undefined>(undefined);
    taskTemp: BehaviorSubject<GeneralFormData | undefined> = new BehaviorSubject<GeneralFormData | undefined>(undefined);
}
