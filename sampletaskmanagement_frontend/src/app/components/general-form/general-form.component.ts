import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';
import { DataStoreService } from 'src/app/services/data-store-service';
import Swal from 'sweetalert2';

export enum GeneralFormType {
  VIEW, CREATE, UPDATE
}

export interface GeneralFormData {
  id?: number, 
  title: String;
  desc: String;
  dueDate: Date;
  createBy?: String;
}

export interface GeneralFormResult extends GeneralFormData {
  actionBy: String;
}

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.css']
})
export class GeneralFormComponent implements OnInit {
  @Input() formType: GeneralFormType = GeneralFormType.CREATE;
  @Input() initialData: GeneralFormData | undefined = undefined;
  @Output() onSubmit: EventEmitter<GeneralFormResult> = new EventEmitter<GeneralFormResult>();

  allFormType: typeof GeneralFormType = GeneralFormType;

  title: String = 'Create new task';
  confirmActionText: String = 'Create';
  minDate: Date = new Date();
  dateValue: Date | null = null;

  taskTitle: String = '';
  taskDesc: String = '';
  taskDueDate: Date | null = null;
  taskCreateBy: String = '';

  constructor(
    private readonly location: Location,
    private readonly dataStore: DataStoreService
    ) { }

  ngOnInit(): void {
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.intitWithType();
  }

  private intitWithType(): void {
    if (this.initialData) {
      this.taskTitle = this.initialData.title;
      this.taskDesc = this.initialData.desc;
      this.taskDueDate = this.initialData.dueDate;

      this.dateValue = new Date(this.taskDueDate);
    }

    if (this.formType === GeneralFormType.VIEW) {
      this.title = `Task detail - ${this.initialData?.title}`;
      this.taskCreateBy = this.initialData?.createBy ?? 'Unknow';
    } else if (this.formType == GeneralFormType.UPDATE) {
      this.title = 'Update task';
      this.confirmActionText = 'Update';
    }
    
  }

  onDateChange(e: any): void {
    this.taskDueDate = (e.value as Date);
  }

  onBack(): void {
    this.location.back();
  }

  onSubmitData(): void {
    if (this.taskTitle && this.taskDesc && this.taskDueDate) {
      const result: GeneralFormResult = {
        title: this.taskTitle,
        desc: this.taskDesc,
        dueDate: this.taskDueDate!,
        actionBy: this.dataStore.name.value!
      };

      if (this.initialData?.id) result['id'] = this.initialData.id;

      this.onSubmit.emit(result);
    }
    else
      Swal.fire({
        icon: 'warning',
        text: 'Please enter all field',
        heightAuto: false
      });
  }
}
