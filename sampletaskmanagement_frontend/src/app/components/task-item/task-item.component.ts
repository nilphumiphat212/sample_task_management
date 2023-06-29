import { Component, Input } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/constrant';
import { TaskDtoModel } from 'src/app/models/task-dto-model';
import { DataStoreService } from 'src/app/services/data-store-service';
import { dateFormatString } from 'src/app/utils/format-util';
import { TaskManagementService } from 'src/app/services/task-management.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() data: TaskDtoModel | undefined;

  constructor(
    private readonly router: Router,
    private readonly dataStore: DataStoreService,
    private readonly service: TaskManagementService
  ) { }

  renderDate(value: String): String {
    return dateFormatString(value);
  }

  private keepDataToTemp(data: TaskDtoModel): void {
    this.dataStore.taskTemp.next({
      id: data.id,
      title: data.title,
      desc: data.desc,
      dueDate: new Date(data.dueDate as any),
      createBy: data.createBy
    });
  }

  viewEventHandle(data: TaskDtoModel): void {
    this.keepDataToTemp(data);
    this.router.navigate([ROUTES.TASK_DETAIL]);
  }

  updateEventHandle(data: TaskDtoModel): void {
    this.keepDataToTemp(data);
    this.router.navigate([ROUTES.UPDATE_TASK]);
  }

  deleteEventHandle(data: TaskDtoModel): void {
    Swal.fire({
      icon: 'warning',
      title: 'Confirm to delete',
      text: `you want to delete task : ${data.title}`,
      showCancelButton: true
    }).then((res) => {
      if (res.isConfirmed) {
        this.service.deleteTask(data.id!).subscribe({
          next: (res) => {
            let icon: SweetAlertIcon = 'success';
            let text = 'successfully'
    
            if (!res.success) {
              icon = 'error';
              text = 'delete task fail';
            }
          },
          error: () => Swal.fire({
            icon: 'error',
            title: 'delete task fail',
            text: 'please check format/server connection',
            heightAuto: false
          })
        });
      }
    });
  }
}
