import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/constrant';
import { TaskDtoModel } from 'src/app/models/task-dto-model';
import { TaskManagementService } from 'src/app/services/task-management.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Array<TaskDtoModel> = [];

  constructor(
    private readonly router: Router,
    private readonly service: TaskManagementService
  ) {
    setInterval(() =>
      this.service.getAllTask()
        .subscribe((res) => {
          if (res.success) this.items = res.data!;
          console.log(this.items)
        }), 500);
  }

  ngOnInit(): void {

  }

  goToCreateTask(): void {
    this.router.navigate([ROUTES.CREATE_TASK]);
  }
}
