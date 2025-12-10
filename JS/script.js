document.getElementById('replaceBtn').addEventListener('click', function() {
    const input = document.getElementById('inputText').value;
    const output = input.replace(/\s/g, '');
    document.getElementById('outputText1').textContent = output;
    document.getElementById('output1').classList.add('show');
});

document.getElementById('inputText').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const input = document.getElementById('inputText').value;
        const output = input.replace(/\s/g, '');
        document.getElementById('outputText1').textContent = output;
        document.getElementById('output1').classList.add('show');
    }
});

document.getElementById('checkBtn').addEventListener('click', function() {
    const input = document.getElementById('emailInput').value;
    const outputSection = document.getElementById('output5');
    const outputText = document.getElementById('outputText5');
    
    if (input.includes('@')) {
        outputText.textContent = 'Valid';
        outputText.className = 'output-text valid';
    } else {
        outputText.textContent = 'Invalid';
        outputText.className = 'output-text invalid';
    }
    
    outputSection.classList.add('show');
});

document.getElementById('emailInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const input = document.getElementById('emailInput').value;
        const outputSection = document.getElementById('output5');
        const outputText = document.getElementById('outputText5');
        
        if (input.includes('@')) {
            outputText.textContent = 'Valid';
            outputText.className = 'output-text valid';
        } else {
            outputText.textContent = 'Invalid';
            outputText.className = 'output-text invalid';
        }
        
        outputSection.classList.add('show');
    }
});
/*
Author: Euwan Abogadie
*/