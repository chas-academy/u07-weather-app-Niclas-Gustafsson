

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
//celcius = boolean which is true by default, and switched with a toggle
export function tempConverter(temp, celcius) {
    if(celcius) {
        const fahrenheit = (temp * 9/5) + 32;
        return fahrenheit;
    } else {
        return temp;
    }
}