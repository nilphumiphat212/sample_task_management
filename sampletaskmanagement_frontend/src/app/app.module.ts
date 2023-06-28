import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { materialModulesImport } from './material-setup';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { GeneralFormComponent } from './components/general-form/general-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

import { DataStoreService } from './services/data-store-service';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    TaskDetailComponent,
    GeneralFormComponent,
    DashboardComponent,
    WelcomeComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    ...materialModulesImport
  ],
  providers: [DataStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
