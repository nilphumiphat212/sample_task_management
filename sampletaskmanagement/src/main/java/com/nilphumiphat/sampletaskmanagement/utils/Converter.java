package com.nilphumiphat.sampletaskmanagement.utils;

import java.util.Date;
import java.text.SimpleDateFormat;
import java.text.ParseException;

public class Converter {
    private static Converter instance;

    public static Converter getInstance() {
        if (instance == null) {
            instance = new Converter();
        }
        return instance;
    }

    public Date toDate(String source, String format) throws ParseException {
        return (new SimpleDateFormat(format)).parse(source);
    }

    public Date toDate(String source) throws ParseException {
        return toDate(source, "yyyy-MM-dd");
    }
}
