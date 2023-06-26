package com.nilphumiphat.sampletaskmanagement.validations.validators;

import java.util.Date;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import com.nilphumiphat.sampletaskmanagement.validations.annotations.ValidDueDate;
import com.nilphumiphat.sampletaskmanagement.utils.Converter;

public class DueDateFormatValidator implements ConstraintValidator<ValidDueDate, Object> {
    @Override
    public boolean isValid(Object value, ConstraintValidatorContext context) {
        try {
            if (value == null) return false;

            String v = (String) value;

            if (v.length() != 10) return false;

            if (v.split("-").length != 3) return false;

            Date dateFromParse = Converter.getInstance().toDate((String) value);

            Date now = new Date();

            return !dateFromParse.before(now) && !dateFromParse.equals(now);
        } catch (Exception err) {
            return false;
        }
    }
}
