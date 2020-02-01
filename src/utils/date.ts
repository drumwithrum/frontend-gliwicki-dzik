export const getDate = (value: string) => {
  const date = new Date(value);
  let month = `${date.getMonth() + 1}`;
  if (parseInt(month, 10) < 10) {
    month = `0${month}`;
  }
  let day = `${date.getDay()}`;
  if (parseInt(day, 10) < 10) {
    day = `0${day}`;
  }
  return `${date.getFullYear()}-${month}-${day}`;
};
