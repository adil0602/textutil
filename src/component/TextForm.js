import React, { useState } from 'react'


export default function TextForm(props) {

  const handleupclick = () => {
    // console.log("button click");
    let newtext = text.toUpperCase();
    settext(newtext)
    props.showalert('Converted to uppercase', 'success');
  }
  const handleloclick = () => {
    // console.log("button click");
    let newtext = text.toLowerCase();
    settext(newtext)
    props.showalert('Converted to Lowercase', 'success');
  }
  const handleclclick = () => {
    // console.log("button click");
    let newtext = "";
    settext(newtext)
    props.showalert('Clear Text', 'success');
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showalert('Speak word', 'success');
  }
  const handlecopy = () => {
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert('Copy Word', 'success');
  }
  const handlechange = (event) => {
    // console.log("on change")
    settext(event.target.value)
  }

  const [text, settext] = useState('');
  // text="enter text 2"//wrong way to change statt
  // settext("enter text 2")//correct way to change statt
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <div className="mb-3">
          <h1>{props.heading} </h1>
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? '' : '#042743', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handlechange} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleloclick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={speak}>Text Speak</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleclclick}>Clear text</button>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h1>Your Summary</h1>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview:"}</p>
      </div>
    </>
  )
}
