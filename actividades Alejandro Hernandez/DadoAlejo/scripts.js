function dado() {    
    let minVal = document.getElementById('min').value;
    let maxVal = document.getElementById('max').value;
    let out = document.getElementById('salida');
    let number = Math.floor(Math.random() * (maxVal - minVal + 1)) + parseInt(minVal);
    out.textContent = (number);
}