// step 1: grab the html 
const complimentBtn = document.getElementById("complimentButton")
const fortunesBtn = document.getElementById("fortuneButton")
const complimentInput = document.getElementById("complimentInput")
const addComplimentButton = document.getElementById("addComplimentButton")
const form = document.querySelector("form")

// step 2: Create a callback function
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortunes = () => {
    axios.get("http://localhost:4000/api/fortune/")
         .then(res => {
            const data = res.data;
            alert(data);
         });
};

const addCompliment = (event) => {
    event.preventDefault()
    const body ={
        compliment: complimentInput.value
    } 
    axios.post("http://localhost:4000/api/compliment/", body)
    .then((res)=> { 
        alert('compliment has been added')
        console.log(res.data)
    })
}

// Step 3: add event listener 
complimentBtn.addEventListener('click', getCompliment)
fortunesBtn.addEventListener('click', getFortunes)
form.addEventListener("submit", addCompliment)