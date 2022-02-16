const setDrink = section => {
  console.log(section);
  section.addEventListener('click', e => {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem('drink', id); //JSON.stringify isn't necessary. it's already a string
    
  });
};

export default setDrink;