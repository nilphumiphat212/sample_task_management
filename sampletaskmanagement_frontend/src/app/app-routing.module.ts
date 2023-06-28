import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { toAuthRoutes } from './auth/auth-guard';
import { ROUTES } from './constrant';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';

const routes: Routes = toAuthRoutes([
  {
    path: ROUTES.WELCOME,
    component: WelcomeComponent
  },
  {
    path: ROUTES.DASHBOARD,
    component: DashboardComponent
  },
  {
    path: ROUTES.CREATE_TASK,
    component: CreateTaskComponent
  },
  {
    path: ROUTES.TASK_DETAIL,
    component: TaskDetailComponent
  },
  {
    path: ROUTES.UPDATE_TASK,
    component: UpdateTaskComponent
  },
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
