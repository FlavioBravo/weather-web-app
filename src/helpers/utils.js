export const getDayNameOfWeek = ( formatDate ) => {
    const date = new Date(formatDate);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[ date.getDay() ];
}