package com.nilphumiphat.sampletaskmanagement.utils;

import java.util.Date;
import java.text.ParseException;
import java.util.Calendar;
import java.util.GregorianCalendar;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

public class ConverterTests {
    @Test
    public void instanceShouldNotNull() {
        Assertions.assertNotNull(Converter.getInstance());
    }

    @Test
    public void shouldParseFailWhenWrongFormat() {
        Exception exception = Assertions.assertThrows(ParseException.class, () -> {
            Converter.getInstance().toDate("test-wrong-format");
        });

        Assertions.assertNotNull(exception);
    }

    @Test
    public void shouldParseStringToDateCompleteWhenFormatIsValid() {
        Date result;
        Calendar calendar = new GregorianCalendar();
        try {
            result = Converter.getInstance().toDate("2023-06-24");
            calendar.setTime(result);
        } catch (ParseException err) {
            result = null;
        }

        Assertions.assertNotNull(result);
        Assertions.assertEquals(2023, calendar.get(Calendar.YEAR));
        Assertions.assertEquals(6, calendar.get(Calendar.MONTH) + 1);
        Assertions.assertEquals(24, calendar.get(Calendar.DAY_OF_MONTH));
    }
}
