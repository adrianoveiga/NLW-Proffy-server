/*
 * Function to convert time string (ex: "8:30") in minutes (integer)
 */
export default function convertHourToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}
