// import React, {useState} from 'react'
// //import PropTypes from 'prop-types'

// export default function TextForm(props) {
//     const handleUpClick = ()=>{
//         // console.log("uppercase was clicked" + text);
//         let newText = text.toUpperCase();
//         setText(newText);
//     }
//     const handleOnChange = (event) =>{
//         // console.log("on change");
//         setText(event.target.value);
//     }
//     const [text, setText] = useState('Enter text here');
//     // text = "new text";
//     // setText('new text');
//     return (
//         <div>
//             <h1>{props.heading}</h1>
//             <div className="mb-3">
//                 <textarea className="form-control" value = {text} id="myBox" rows="8" onChange = {handleOnChange}></textarea>
//             </div>
//                 <button className="btn btn primary" style={{ backgroundColor: 'green', color: 'white' }} onClick = {handleUpClick}>Covert to Uppercase</button>

//         </div>
//     )
// }
import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    };

    const handleItalicClick = () => {
        setIsItalic(!isItalic);  // Toggle the italic state
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleOnFocus = () => {
        if (text === 'Enter text here') {
            setText('');
        }
    };

    const handleOnBlur = () => {
        if (text === '') {
            setText('Enter text here');
        }
    };

    const [text, setText] = useState('Enter text here');
    const [isItalic, setIsItalic] = useState(false);  // State for italic styling

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    id="myBox"
                    rows="8"
                    onChange={handleOnChange}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    style={{ fontStyle: isItalic ? 'italic' : 'normal' }}  // Apply italic styling
                ></textarea>
            </div>
            <button
                className="btn btn-primary mx-1"
                style={{ backgroundColor: 'green', color: 'white' }}
                onClick={handleUpClick}
            >
                Convert to Uppercase
            </button>
            <button
                className="btn btn-primary mx-1"
                style={{ backgroundColor: 'green', color: 'white' }}
                onClick={handleLoClick}
            >
                Convert to Lowercase
            </button>
            <button
                className="btn btn-primary mx-1"
                style={{ backgroundColor: 'green', color: 'white' }}
                onClick={handleClearClick}
            >
                Clear Text
            </button>
            <button
                className="btn btn-primary mx-1"
                style={{ backgroundColor: 'green', color: 'white' }}
                onClick={handleItalicClick}
            >
                Toggle Italic
            </button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} minutes to read</p>
            <h2>Preview</h2>
            <p style={{ fontStyle: isItalic ? 'italic' : 'normal' }}>{text}</p>  {/* Italic preview */}
        </div>
        </>
    );
}
