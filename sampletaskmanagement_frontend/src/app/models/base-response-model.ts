export interface BaseResponseModel<T> {
    success?: boolean;
    message?: String;
    data?: T;
}
