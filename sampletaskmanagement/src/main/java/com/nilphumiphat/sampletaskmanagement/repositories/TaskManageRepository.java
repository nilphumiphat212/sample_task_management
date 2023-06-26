package com.nilphumiphat.sampletaskmanagement.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nilphumiphat.sampletaskmanagement.models.entities.TaskEntityModel;

public interface TaskManageRepository extends JpaRepository<TaskEntityModel, Long> {
    public TaskEntityModel findById(int id);
}
