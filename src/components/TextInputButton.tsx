import React, { useState } from 'react';
import { SafeAreaView, View, Button, Alert } from 'react-native'

function TextInputButton():React.JSX.Element {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event:any) => {
        setInputValue(event.target.value);
    };

    // const handleSubmit = () => {
    //    // add alternative to alert(`Input Value: ${inputValue}`);
    //    navigation.navigate('Home')
    // };
    return (
        <div style={{ padding: '20x', textAlign: 'center'}}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                style={{ padding: '10px', width: '200px' }}
                placeholder="Username"
            />
            <button
                //onClick={handleSubmit}
                style={{ padding: '10px', marginLeft: '10px' }}
            >
                Submit
            </button>
        </div>
    );
}

export default TextInputButton;