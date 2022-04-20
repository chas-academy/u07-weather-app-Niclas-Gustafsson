

export function getDay(UTC, offset) {
    const date = (UTC * 1000) + offset;
    return new Date(date);
}

export function getTime(UTC, offset) {
    const time = (UTC * 1000) + offset;
    return new Date(time);
}

export function getCity(timezone) {
    const city = timezone.substring(timezone.indexOf('/') + 1);
    return city;
}