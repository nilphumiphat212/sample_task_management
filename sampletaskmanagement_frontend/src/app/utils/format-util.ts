export function number2Digit(value: number): String {
    if (value <= 9) return `0${value}`;
    return String(value);
}

export function dateFormatString(value: any): String {
    const date = new Date(value);
    return `${date.getFullYear()}-${number2Digit(date.getMonth() + 1)}-${number2Digit(date.getDate())}`;
}
