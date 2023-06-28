import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralFormType, GeneralFormData, GeneralFormResult } from 'src/app/components/general-form/general-form.component';
import { DataStoreService } from 'src/app/services/data-store-service';
import { TaskManagementService } from 'src/app/services/task-management.service';
import { number2Digit } from 'src/app/utils/format-util';
import Swal, { SweetAlertIcon } from 'sweetalert2';


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  type: GeneralFormType = GeneralFormType.UPDATE;
  data: GeneralFormData | undefined;

  constructor(
    private readonly service: TaskManagementService,
    private readonly dataStore: DataStoreService,
    private readonly location: Location
  ) {
    if (this.dataStore.taskTemp.value) this.data = this.dataStore.taskTemp.value;
  }

  onSubmit(data: GeneralFormResult) {
    this.service.updateTask({
      id: data.id,
      title: data.title,
      desc: data.desc,
      dueDate: `${data.dueDate.getFullYear()}-${number2Digit(data.dueDate.getMonth() + 1)}-${number2Digit(data.dueDate.getDate())}`,
      createBy: data.actionBy!
    }).subscribe({
      next: (res) => {
        let icon: SweetAlertIcon = 'success';
        let text = 'successfully'

        if (!res.success) {
          icon = 'error';
          text = 'update task fail';
        }

        Swal.fire({
          icon,
          text,
          heightAuto: false
        }).then((res) => this.location.back());
      },
      error: () => Swal.fire({
        icon: 'error',
        title: 'update task fail',
        text: 'please check format/server connection',
        heightAuto: false
      })
    });
  }
}
