package com.nilphumiphat.sampletaskmanagement.models.dtos;

import java.text.ParseException;

import jakarta.validation.constraints.NotEmpty;
import com.nilphumiphat.sampletaskmanagement.validations.annotations.ValidDueDate;
import com.nilphumiphat.sampletaskmanagement.models.entities.TaskEntityModel;
import com.nilphumiphat.sampletaskmanagement.utils.Converter;

public class TaskDtoModel {
    private int id;
    @NotEmpty(message = "title can not null or empty")
    private String title;
    @NotEmpty(message = "desc can not null or empty")
    private String desc;
    @NotEmpty(message = "dueDate can not null or empty")
    @ValidDueDate(message = "dueDate is invalid")
    private String dueDate;
    @NotEmpty(message = "createBy can not null or empty")
    private String createBy;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public TaskEntityModel toEntity() throws ParseException {
        return new TaskEntityModel()
                .setTitle(title)
                .setDesc(desc)
                .setDueDate(Converter.getInstance().toDate(dueDate))
                .setCreateBy(createBy);
    }
}
