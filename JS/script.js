document.getElementById('replaceBtn').addEventListener('click', function() {
    const input = document.getElementById('inputText').value;
    const output = input.replace(/\s/g, '');
    document.getElementById('output').textContent = output;
});

document.getElementById('inputText').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const input = document.getElementById('inputText').value;
        const output = input.replace(/\s/g, '');
        document.getElementById('output').textContent = output;
    }
});

/*
Author: Euwan Abogadie
*/