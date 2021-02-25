function render() {
    const element = `<div>
<div>Hello world</div>
<div><input type="text"/></div>
<div>${new Date().toLocaleString()}</div>
</div>`;

    document.getElementById('app1').innerHTML = element;

    const element2 = (
        <div>
            <div>Hello world</div>
            <div>
                <input type='text' />
            </div>
            <div>{new Date().toLocaleString()}</div>
        </div>
    );

    ReactDOM.render(element2, document.getElementById('app2'));
}

setInterval(() => {
    render();
}, 1000);
