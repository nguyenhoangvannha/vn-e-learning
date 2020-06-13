const toMdy = (date) => {
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
    return dateTimeFormat.format(date)
}
export const DateFormat = {
    toMdy: toMdy,
}