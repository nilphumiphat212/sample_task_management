package com.nilphumiphat.sampletaskmanagement.models;

public record BaseResponseModel<T>(boolean success, String message, T data) {}
