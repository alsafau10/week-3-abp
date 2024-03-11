const calculateSum = () => {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("maks").value);
    let result = 0;
    const numbers = [];
    
    // Loop through the range and add odd numbers to the result
    for (let i = min; i <= max; i++) {
        if (i % 2 !== 0) {
            result += i;
            numbers.push(i);
        }
    }
    
    document.getElementById("Hasil").textContent = "Jumlah dari bilangan ganjil: " + result;
    document.getElementById("list-angka").textContent = "Angka-angka yang ditambahkan: " + numbers.join("+ ");
}


const changeTextAlignment = (alignment) => {
    document.getElementById("text-a").style.textAlign = alignment;
}

const changeBoxColor = () => {
    const box2 = document.getElementsByClassName('box2')[0]; 
    const originalColor = "red"; 

    if (box2.style.backgroundColor === originalColor || box2.style.backgroundColor === "") {
        box2.style.backgroundColor = "green";
    } else {
        box2.style.backgroundColor = originalColor;
    }
}