import { useState } from 'react';
import '../styles.css'

function Button(props) {
    const [value1, setValue1] = useState('')

    function handleClick() {
        props.setValue(props.value === 'X' ? 'O' : 'X');

        if (value1 === '') {
            setValue1(props.value === 'X' ? 'X' : 'O');
        } else if (value1 === 'X') {
            setValue1('O')
        } else {
            setValue1("X")
        }
    }
    return (
        <div>
            <button onClick={handleClick}>{value1}</button>
        </div>
    )
}


export default Button