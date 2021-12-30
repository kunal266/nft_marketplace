

const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGNlMDI2Q2MzZjQ4YTA2YkY3ZjYzOTM3ZEY2N2U1NjExNTQxNzViRkUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDA4NDkwNTE5MzQsIm5hbWUiOiJzdXBhc3RhenoifQ.xQr12QpIORDkbQUIvs2ieB-cws3t2PsFxTo1cCwiG4E'


import { Web3Storage,getFilesFromPath } from 'web3.storage'
const client = new Web3Storage({ token: apiToken })

// Construct with token and endpoint
import React, { useState, useRef, useEffect } from "react";
// import ReactDOM from "react-dom";
// It's not clear to me how to trigger updates to the UI
const useForceUpdate = () => useState()[1];

function Mintnft() {
  const fileInput = useRef(null);
  const forceUpdate = useForceUpdate();
  const namee = useRef(null);
  const description = useRef(null);
  useEffect(e => {
    window.addEventListener("keyup", clickFileInput);
    return () => window.removeEventListener("keyup", clickFileInput);
  });

  function clickFileInput(e) {
    if (fileInput.current.nextSibling.contains(document.activeElement)) {
      // Bind space to trigger clicking of the button when focused
      if (e.keyCode === 32) {
        fileInput.current.click();
      }
    }
  }

  const onSubmit = async()=> {
    e.preventDefault();
    var fileData = fileInput.current.files[0].name;
    console.log(fileInput.current.files[0]);
    var fileName = namee.current.value;
    var fileDesc = description.current.value;
    console.log(fileName);
    console.log(fileDesc);
    const files = await getFilesFromPath('../assets/pikachu.jpg')
    const rootCid = await client.put(files,{name:fileData})
    console.log(rootCid);
    // const metadata = await client.store({
    //   name: fileName,
    //   description: fileDesc,
    //   image: new File([fileData], filename+'.jpg', { type: 'image/jpg' })
    // })
    // console.log(metadata.url)
    // const data = new FormData(fileInput.current.files);

  }

  function fileNames() {
    const { current } = fileInput;

    if (current && current.files.length > 0) {
      let messages = [];
      for (let file of current.files) {
        messages = messages.concat(<p key={file.name}>{file.name}</p>);
      }
      return messages;
    }
    return null;
  }

  return (
    <div className="App" style={{marginTop:"10vh"}}>
      <form onSubmit={onSubmit}>
        <input
          id="file"
          type="file"
          ref={fileInput}
          // The onChange should trigger updates whenever
          // the value changes?
          // Try to select a file, then try selecting another one.
          onChange={forceUpdate}
          multiple
        />
        <label htmlFor="file">
          <span tabIndex="0" role="button" aria-controls="filename">
            Upload file(s):{" "}
          </span>
        </label>
        <br/>
        <br/>
        <input type="text" ref={namee} style={{backgroundColor:"gray"}}></input>
        <br/>
        <br/>
        <input type="text" ref={description} style={{backgroundColor:"gray"}}></input>
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
  export default Mintnft;