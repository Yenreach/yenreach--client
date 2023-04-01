
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

export const formatDate = (date) => {
    const newDate = new Date(date * 1000); // convert to milliseconds
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${day} ${months[month+1]} ${year}`;
};
  
export const expired = (date) => {
    if (!date) return true;
    
    const newDate = new Date(date * 1000); // convert to milliseconds
    const today = new Date();

    // console.log("newDate", newDate, "today", today);

    if (newDate < today) {
        return true;
    }
    return false;
};
  
  