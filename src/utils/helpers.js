export function truncateText(text, numberOfCharacters) {
    if (text.length > numberOfCharacters) {
        return text.substring(0, numberOfCharacters) + "...";
    } else {
        return text;
    }
}
