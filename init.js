function start(){
    const initPerson = personGenerator.getPerson();
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surName;
    document.querySelector('#birthYearOutput').innerText = initPerson.date;
    document.querySelector('#sekondNameOutput').innerText = initPerson.secondName;
    document.querySelector('#professionOutput').innerText = initPerson.randomProfession;     
}

const startButton=document.querySelector('#btnStart');
const clearButton=document.querySelector('#btnClear');

startButton.addEventListener('mousedown', () => {
    location.reload();   
})

startButton.addEventListener('mouseup', () => {
    start();
    genderOutput.classList.add("new_span");
    firstNameOutput.classList.add("new_span");
    surnameOutput.classList.add("new_span");
    birthYearOutput.classList.add("new_span");
    sekondNameOutput.classList.add("new_span");
    professionOutput.classList.add("new_span"); 
})

clearButton.addEventListener('click', () => {
    location.reload();
})
