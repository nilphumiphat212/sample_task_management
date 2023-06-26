import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseResponseModel } from '../models/base-response-model';
import { TaskDtoModel } from '../models/task-dto-model';
import { PING_URL, GET_ALL_TASK_URL, CREATE_TASK_URL, UPDATE_TASK_URL, DELETE_TASK_URL } from '../constrant';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  constructor(private readonly http: HttpClient) {}

  ping(): Observable<BaseResponseModel<String>> {
    return this.http.get<BaseResponseModel<String>>(PING_URL);
  }

  getAllTask(): Observable<BaseResponseModel<Array<TaskDtoModel>>> {
    return this.http.get<BaseResponseModel<Array<TaskDtoModel>>>(GET_ALL_TASK_URL);
  }

  createTask(data: TaskDtoModel): Observable<BaseResponseModel<any>> {
    return this.http.post<BaseResponseModel<any>>(CREATE_TASK_URL, data);
  }

  updateTask(data: TaskDtoModel): Observable<BaseResponseModel<any>> {
    return this.http.post<BaseResponseModel<any>>(UPDATE_TASK_URL, data);
  }

  deleteTask(id: number): Observable<BaseResponseModel<any>> {
    return this.http.delete<BaseResponseModel<any>>(`${DELETE_TASK_URL}/${id}`);
  }
}
