package com.nilphumiphat.sampletaskmanagement.validations.validators;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

public class DueDateFormatValidatorTests {
    private boolean callValidator(Object value) {
        return (new DueDateFormatValidator()).isValid(value, null);
    }

    @Test
    public void shouldPassWhenValidFormat() {
        boolean result = callValidator("2030-06-24");

        Assertions.assertTrue(result);
    }

    @Test
    public void shouldNotPassWhenInputNotStringType() {
        boolean result = callValidator(55555555);

        Assertions.assertFalse(result);
    }

    @Test
    public void shouldNotPassWhenLengthLessThan10Digit() {
        boolean result = callValidator("123456789");

        Assertions.assertFalse(result);
    }

    @Test
    public void shouldNotPassWhenSplitDateSplitExpectInvalid() {
        boolean result = callValidator("2023-0624");

        Assertions.assertFalse(result);
    }

    @Test
    public void shouldNotPassWhenInvalidDateFormat() {
        boolean result = callValidator("20230624");

        Assertions.assertFalse(result);
    }

    @Test
    public void shouldNotPassWhenNotDateOfFeatureOfDay() {
        boolean result = callValidator("2023-06-24");

        Assertions.assertFalse(result);
    }
}
