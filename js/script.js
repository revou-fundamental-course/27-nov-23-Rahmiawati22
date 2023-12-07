function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function calculateLuas() {
    const base = parseFloat(document.getElementById('baseLuas').value);
    const height = parseFloat(document.getElementById('heightLuas').value);

    if (isNaN(base) || isNaN(height)) {
        alert('Masukkan angka valid untuk panjang alas dan tinggi.');
        return;
    }

    const luas = 0.5 * base * height;
    displayResult('luasOutput', luas, 'luasResult');
}

function calculateKeliling() {
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        alert('Masukkan angka valid untuk panjang sisi.');
        return;
    }

    const keliling = side1 + side2 + side3;
    displayResult('kelilingOutput', keliling, 'kelilingResult');
}

function displayResult(outputId, result, resultContainerId) {
    const outputElement = document.getElementById(outputId);
    outputElement.innerText = `Hasil: ${result}`;
    
    const resultContainer = document.getElementById(resultContainerId);
    resultContainer.style.display = 'block';
}

function resetLuas() {
    document.getElementById('luasForm').reset();
    document.getElementById('luasResult').style.display = 'none';
}

function resetKeliling() {
    document.getElementById('kelilingForm').reset();
    document.getElementById('kelilingResult').style.display = 'none';
}
