package com.nilphumiphat.sampletaskmanagement.validations.annotations;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Target;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import com.nilphumiphat.sampletaskmanagement.validations.validators.DueDateFormatValidator;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD})
@Constraint(validatedBy = DueDateFormatValidator.class)
public @interface ValidDueDate {
    String message() default "com.nilphumiphat.sampletaskmanagement.validations.ValidDueDate";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
