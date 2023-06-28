import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TaskManagementService } from './../../services/task-management.service';
import { DataStoreService } from './../../services/data-store-service';
import { ROUTES } from './../../constrant';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  name: String = '';

  constructor(
    private readonly router: Router,
    private readonly service: TaskManagementService,
    readonly dataStore: DataStoreService  
  ) { }

  private goToWelcomePage(): void {
    this.router.navigate([ROUTES.DASHBOARD]);
  }

  onSubmitName(): void {
    const showFailPopup = () => {
      Swal.fire({
        icon: 'error',
        text: 'Can not connect to server !!!',
        heightAuto: false,
        confirmButtonText: 'Retry',
        showCancelButton: true,
        cancelButtonText: 'Close',
      }).then((result) => {
        if (result.isConfirmed) this.onSubmitName();
      });
    };

    this.service.ping()
      .subscribe({
        next: (res) => {
          if (!res.success) showFailPopup();
          else {
            if (this.name) {
              this.dataStore.name.next(this.name);
              this.goToWelcomePage();
            }
          }
        },
        error: (err) => showFailPopup()
      });

    this.service.getAllTask()
      .subscribe((res) => console.log(res));
  }
}
