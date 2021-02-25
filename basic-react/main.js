function render() {
    const element = `<div id="x">
<div>Counter</div>
<div><input type="text"/></div>
<div>${new Date().toLocaleString()}</div>
</div>`;

    document.getElementById('app1').innerHTML = element;

    const element2 = (
        <div id='x'>
            <div>Counter</div>
            <div>
                <input type='text' />
            </div>
            <div>{new Date().toLocaleString()}</div>
        </div>
    );

    ReactDOM.render(element2, document.getElementById('app2'));
}

setInterval(function () {
    render();
}, 1000);
