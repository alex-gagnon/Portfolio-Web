function friendlyDates(_date) {
    let date = new Date(_date);
    const monthName = date.toLocaleString('en-us', {month: 'short'});
    return monthName + ' ' + date.getFullYear();
}

export default friendlyDates;