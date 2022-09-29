/**
 * Convertissez des millisecondes en jours en divisant les millisecondes par le nombre de millisecondes
 * dans une journée.
 * @param {number} ms - nombre - le nombre de millisecondes à convertir en jours
 * @returns Le nombre de jours entre les deux dates.
 */
const convertMsToDays = (ms: number) => {
    const msInOneSecond = 1000;
    const secondsInOneMinute = 60;
    const minutesInOneHour = 60;
    const hoursInOneDay = 24;

    const minutesInOneDay = hoursInOneDay * minutesInOneHour;
    const secondsInOneDay = secondsInOneMinute * minutesInOneDay;
    const msInOneDay = msInOneSecond * secondsInOneDay;

    return Math.ceil(ms / msInOneDay);
};

/**
 * Il prend deux dates et renvoie le nombre de jours qui les séparent.
 * @param {Date} dateOne - Date - La première date à comparer.
 * @param {Date} dateTwo - Date - La date à comparer.
 * @returns La différence en jours entre deux dates.
 */
export const getDaysBetweenDates = (dateOne: Date, dateTwo: Date) => {
    let differenceInMs = dateTwo.getTime() - dateOne.getTime();

    if (differenceInMs < 0) {
        differenceInMs = dateOne.getTime() - dateTwo.getTime();
    }

    return convertMsToDays(differenceInMs);
};
