export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    let string;

    if (isIndex) {
        string = 'Holberton School';
    } else {
        string = 'Holberton School main dashboard';
    }
    return string;
}

export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
}