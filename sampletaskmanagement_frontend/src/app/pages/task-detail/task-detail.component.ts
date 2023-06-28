import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralFormType, GeneralFormData } from 'src/app/components/general-form/general-form.component';
import { DataStoreService } from 'src/app/services/data-store-service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  type: GeneralFormType = GeneralFormType.VIEW;
  data: GeneralFormData | undefined;

  constructor(
    private readonly router: Router,
    private readonly dataStore: DataStoreService
  ) { }

  ngOnInit(): void {
    if (this.dataStore.taskTemp.value) this.data = this.dataStore.taskTemp.value;
  }

}
