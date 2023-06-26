package com.nilphumiphat.sampletaskmanagement.models.entities;

import java.util.Date;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "tasks")
public class TaskEntityModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String desc;
    @Column(nullable = false)
    private Date dueDate;
    @Column(nullable = false)
    private String createBy;

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDesc() {
        return desc;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public String getCreateBy() {
        return createBy;
    }

    public TaskEntityModel setId(int id) {
        this.id = id;
        return this;
    }

    public TaskEntityModel setTitle(String title) {
        this.title = title;
        return this;
    }

    public TaskEntityModel setDesc(String desc) {
        this.desc = desc;
        return this;
    }

    public TaskEntityModel setDueDate(Date dueDate) {
        this.dueDate = dueDate;
        return this;
    }

    public TaskEntityModel setCreateBy(String createBy) {
        this.createBy = createBy;
        return this;
    }
}
