# azure-cloudresume-challenge
My own azure resume

Frontend folder contains the website

Main.js contains visitor counter code, code pated below!

window.addEventListener('DOMContentLoaded',(event) =>{

    getVisitCount();

})

const functionApi = '';

const getVisitCount = () => {
    
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log{"Wesite called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(fuction(error){
        console.log(error);
    });
    return count;
}