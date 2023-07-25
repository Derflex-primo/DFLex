// DATE
export const formatDate = (inputDate) => {
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

  const dateObj = new Date(inputDate);
  const month = months[dateObj.getMonth()];
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  return `${month} ${day}, ${year}`;
};

// TITLE SLICE
export const truncateText = (text, limit) => {
  if (text.length > limit) {
    return text.slice(0, limit) + "...";
  }
  return text;
};

// USD
export const formatUSDWithComma = (number) => {
  return number.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

// VOLUME

export const formatVolume = (volume) => {
  const units = ["", "K", "M", "B", "T"];
  let formattedVolume = volume;
  let unitIndex = 0;

  while (formattedVolume >= 1000 && unitIndex < units.length - 1) {
    formattedVolume /= 1000;
    unitIndex++;
  }

  // Round the number to two decimal places
  formattedVolume = Number(Math.round(formattedVolume + "e2") + "e-2");

  return formattedVolume;
};
