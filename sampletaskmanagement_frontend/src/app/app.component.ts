import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TaskManagementService } from './services/task-management.service';
import { DataStoreService } from './services/data-store-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sampletaskmanagement_frontend';
  name: String = '';

  constructor(
    private readonly service: TaskManagementService,
    readonly dataStore: DataStoreService  
  ) { }

  ngOnInit(): void {
    const showFailPopup = () => {
      Swal.fire({
        icon: 'error',
        text: 'Can not connect to server',
      });
    };

    this.service.ping()
      .subscribe({
        next: (res) => {
          if (!res.success) showFailPopup()
        },
        error: (err) => showFailPopup()
      });

    this.service.getAllTask()
      .subscribe((res) => console.log(res));
  }

  onSubmitName(): void {
    if (this.name) this.dataStore.name.next(this.name);
  }
}
