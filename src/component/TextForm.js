import React,{useState} from 'react'


export default function TextForm(props) {
const handleupclick=()=>{
 // console.log("button click");
  let newtext=text.toUpperCase();
  settext(newtext)
  props.showalert('Converted to uppercase','success');
}
const handleloclick=()=>{
  // console.log("button click");
   let newtext=text.toLowerCase();
   settext(newtext)
   props.showalert('Converted to Lowercase','success');
 }
 const handleclclick=()=>{
  // console.log("button click");
   let newtext="";
   settext(newtext)
   props.showalert('Clear Text','success');
 }
 const speak=()=>{
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showalert('Speak word','success');
 }
 const handlecopy=()=>{
  var text=document.getElementById('mybox');
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showalert('Copy Word','success');
 }
const handlechange=(event)=>{
 // console.log("on change")
  settext(event.target.value)
}

  const [text,settext]=useState('');
  // text="enter text 2"//wrong way to change statt
  // settext("enter text 2")//correct way to change statt
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
<div className="mb-3">
  <h1>{props.heading} </h1>
  <textarea className="form-control" value={text} onChange={handlechange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={speak}>Text Speak</button>
<button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleclclick}>Clear text</button>
    </div>
    <div className="container my-4"style={{color:props.mode==='dark'?'white':'black'}} >
<h1>Your Summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length} Minutes to Read </p>
<h3>Preview</h3>
<p>{text}</p>
    </div>
    </>
  )
}
