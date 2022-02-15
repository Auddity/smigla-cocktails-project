const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`Check ${selection}: Element not found`);
};

export default getElement;
