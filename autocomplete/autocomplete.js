var names = ['Leela', 'Dinesh', 'Priyatam'];

renderNames();

document
    .getElementById('input-text')
    .addEventListener('keyup', function (e) {
        console.log(e.target.value);
        renderNames(e.target.value);
    });

function renderNames(text = '') {
    let element = '<div>';
    for (let i = 0; i < names.length; i++) {
        if (text !== '') {
            let textFound = names[i].indexOf(text);
            if (textFound !== -1) {
                element += '<div>' + names[i] + '</div>';
            }
        } else {
            element += '<div>' + names[i] + '</div>';
        }
    }

    element += '</div>';

    document.getElementById('names-list').innerHTML = element;
}
