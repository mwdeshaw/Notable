export const obtainYear = dateObj => (
    (new Date(dateObj)).getFullYear()
);

export const obtainMonth = dateObj => {
    const months = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sept", "Oct", "Nov", "Dec"
    ];
    const num = (new Date(dateObj)).getMonth();
    return months[num];
};

export const obtainDay = dateObj => {
    const today = new Date();
    const date = new Date(dateObj);
    if (today.getDate() - 1 === date.getDate()) {
        return "Yesterday";
    } else if (today.getDate() === date.getDate()) {
        return "Today";
    } else {
        return date.getDate();
    };
};
