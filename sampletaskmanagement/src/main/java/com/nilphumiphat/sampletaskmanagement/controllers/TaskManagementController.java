package com.nilphumiphat.sampletaskmanagement.controllers;

import java.util.List;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import com.nilphumiphat.sampletaskmanagement.services.TaskManageService;
import com.nilphumiphat.sampletaskmanagement.models.BaseResponseModel;
import com.nilphumiphat.sampletaskmanagement.models.dtos.TaskDtoModel;
import com.nilphumiphat.sampletaskmanagement.models.entities.TaskEntityModel;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/task-management")
public class TaskManagementController {
    private final TaskManageService service;

    public TaskManagementController(TaskManageService service) {
        this.service = service;
    }

    @GetMapping("/ping")
    public BaseResponseModel<String> ping() {
        return new BaseResponseModel<String>(true, "Service is running...", null);
    }

    @GetMapping("/get-all-task")
    public BaseResponseModel<List<TaskEntityModel>> getAllTask() {
        BaseResponseModel<List<TaskEntityModel>> response;

        try {
            List<TaskEntityModel> tasks = service.getAllTask();
            response  = new BaseResponseModel<>(true, null, tasks);;
        } catch (Exception err) {
            response = new BaseResponseModel<>(false, err.getMessage(), null);
        }

        return response;
    }

    @PostMapping("/create-task")
    public BaseResponseModel<Object> createTask(@Valid @RequestBody TaskDtoModel data) {
        BaseResponseModel<Object> response;

        try {
            service.createTask(data.toEntity());
            response = new BaseResponseModel<>(true, "create task success", null);
        } catch (Exception err) {
            response = new BaseResponseModel<>(true, "create task fail error: " + err.getMessage(), null);
        }

        return response;
    }

    @PutMapping("/update-task")
    public BaseResponseModel<Object> updateTask(@Valid @RequestBody TaskDtoModel data) {
        BaseResponseModel<Object> response;

        try {
            boolean responseSuccess = true;
            String responseMessage = "update task success";

            if (!service.isExists(data.getId())) {
                responseSuccess = false;
                responseMessage = "update task fail";
            } else service.updateTask(data.toEntity());

            response = new BaseResponseModel<>(responseSuccess, responseMessage, null);
        } catch (Exception err) {
            response = new BaseResponseModel<>(false, "update task fail", null);
        }

        return response;
    }

    @DeleteMapping("/delete-task/{id}")
    public BaseResponseModel<Object> deleteTask(@PathVariable("id") int id) {
        BaseResponseModel<Object> response;

        try {
            boolean responseSuccess = true;
            String responseMessage = "delete task success";

            if (!service.deleteTask(id)) {
                responseSuccess = false;
                responseMessage = "delete task fail";
            }

            response = new BaseResponseModel<>(responseSuccess, responseMessage, null);
        } catch (Exception err) {
            response = new BaseResponseModel<>(false, "delete task fail", null);
        }

        return response;
    }
}
