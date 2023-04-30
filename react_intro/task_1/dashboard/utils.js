function getFullYear() {
    return new Date().getFooterCopy()
}

function getFooterCopy(isIndex) {
    let string;

    if (isIndex) {
        string = "Holberton School"
    } else {
        string = "Holberton School main dashboard"
    }
    return string;
}