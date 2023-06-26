package com.nilphumiphat.sampletaskmanagement.services;

import java.util.List;
import com.nilphumiphat.sampletaskmanagement.models.entities.TaskEntityModel;

public interface TaskManageService {
    public boolean isExists(int id);
    public List<TaskEntityModel> getAllTask();
    public void createTask(TaskEntityModel task);
    public void updateTask(TaskEntityModel task);
    public boolean deleteTask(int id);
}
