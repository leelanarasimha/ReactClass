import ShowName from '../ShowName/ShowName';

function Autocomplete() {
    let name = 'Leela';
    return (
        <div>
            Hai {name}
            <ShowName name='AutoComplete' id='1' />
        </div>
    );
}

export default Autocomplete;
