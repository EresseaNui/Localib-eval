/**
 * Il prend une date et un séparateur et renvoie une chaîne au format jour-mois-année.
 * @param {Date} date - Date - La date que vous souhaitez formater
 * @param {string} separator - chaîne de caractères
 * @returns Une fonction qui prend deux arguments, date et séparateur.
 */
export const formattedDate = (date: Date, separator: string) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day}${separator}${month}${separator}${year}`;
};
