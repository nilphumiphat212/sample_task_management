package com.nilphumiphat.sampletaskmanagement.services;

import java.util.List;
import org.springframework.stereotype.Service;
import com.nilphumiphat.sampletaskmanagement.repositories.TaskManageRepository;
import com.nilphumiphat.sampletaskmanagement.models.entities.TaskEntityModel;

@Service
public class TaskManageServiceImp implements TaskManageService {
    private final TaskManageRepository repository;

    public TaskManageServiceImp(TaskManageRepository repository) {
        this.repository = repository;
    }

    public boolean isExists(int id) {
        return repository.findById(id) != null;
    }

    @Override
    public List<TaskEntityModel> getAllTask() {
        return repository.findAll();
    }

    @Override
    public void createTask(TaskEntityModel task) {
        repository.save(task);
    }

    public void updateTask(TaskEntityModel task) {
        TaskEntityModel taskFind = repository.findById(task.getId());
        taskFind.setTitle(task.getTitle())
                .setDesc(task.getDesc())
                .setDueDate(task.getDueDate());
        repository.save(taskFind);
    }

    @Override
    public boolean deleteTask(int id) {
        TaskEntityModel task = repository.findById(id);
        if (task == null) return false;
        repository.delete(task);
        return true;
    }
}
