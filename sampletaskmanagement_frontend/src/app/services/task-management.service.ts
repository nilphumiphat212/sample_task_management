import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseResponseModel } from '../models/base-response-model';
import { TaskDtoModel } from '../models/task-dto-model';
import { URLS } from '../constrant';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  constructor(private readonly http: HttpClient) {}

  ping(): Observable<BaseResponseModel<String>> {
    return this.http.get<BaseResponseModel<String>>(URLS.PING_URL);
  }

  getAllTask(): Observable<BaseResponseModel<Array<TaskDtoModel>>> {
    return this.http.get<BaseResponseModel<Array<TaskDtoModel>>>(URLS.GET_ALL_TASK_URL);
  }

  createTask(data: TaskDtoModel): Observable<BaseResponseModel<any>> {
    return this.http.post<BaseResponseModel<any>>(URLS.CREATE_TASK_URL, data);
  }

  updateTask(data: TaskDtoModel): Observable<BaseResponseModel<any>> {
    console.log('aaaa', data);
    return this.http.put<BaseResponseModel<any>>(URLS.UPDATE_TASK_URL, data);
  }

  deleteTask(id: number): Observable<BaseResponseModel<any>> {
    return this.http.delete<BaseResponseModel<any>>(`${URLS.DELETE_TASK_URL}/${id}`);
  }
}
