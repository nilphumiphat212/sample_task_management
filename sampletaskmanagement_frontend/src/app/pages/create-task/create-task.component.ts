import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { GeneralFormType, GeneralFormResult } from 'src/app/components/general-form/general-form.component';
import { TaskManagementService } from 'src/app/services/task-management.service';
import { number2Digit } from 'src/app/utils/format-util';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  type: GeneralFormType = GeneralFormType.CREATE;

  constructor(
    private location: Location,
    private readonly service: TaskManagementService
  ) { }

  onSubmit(data: GeneralFormResult): void {
    this.service.createTask({
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
          text = 'create task fail';
        }

        Swal.fire({
          icon,
          text,
          heightAuto: false
        }).then((res) => this.location.back());
      },
      error: () => Swal.fire({
        icon: 'error',
        title: 'create task fail',
        text: 'please check format/server connection',
        heightAuto: false
      })
    });
  }

}
