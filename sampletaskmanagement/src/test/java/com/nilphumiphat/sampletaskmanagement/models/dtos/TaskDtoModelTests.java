package com.nilphumiphat.sampletaskmanagement.models.dtos;

import com.nilphumiphat.sampletaskmanagement.models.entities.TaskEntityModel;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

public class TaskDtoModelTests {
    @Test
    public void canConvertDtoToEntity() {
        TaskDtoModel dto = new TaskDtoModel();
        dto.setId(1);
        dto.setTitle("test title");
        dto.setDesc("test desc");
        dto.setDueDate("2023-06-24");
        dto.setCreateBy("nil");

        Object result = null;
        try {
            result = dto.toEntity();
        } catch (Exception ignored) { }

        assert result != null;
        Assertions.assertNotNull(result);
        Assertions.assertTrue(result instanceof TaskEntityModel);
    }
}
