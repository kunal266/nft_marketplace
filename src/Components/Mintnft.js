import React, { useState,useRef } from "react";
import { NFTStorage, File } from 'nft.storage/dist/bundle.esm.min.js';
import fs from "fs";
const apiKey = "<YOUR_API_KEY>"
const client = new NFTStorage({ token: apiKey })
import * as nearAPI from 'near-api-js';
const Mintnft = () => {
  const [picture, setPicture] = useState(null);
  const title = useRef(null);
  const desc = useRef(null);
  const [filedata,setfiledata] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [resp,setresp] = useState(null)






  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
      setfiledata(e.target.files[0])
    // mintstr(reader.readAsDataURL(e.target.files[0]));
    }

  };

  const onChangetitle = e =>{
    // console.log(title.current.value);
  };

  const onChangedesc = e =>{
    // console.log(desc.current.value);
  }
  const deposit = nearAPI.utils.format.parseNearAmount("0.1");
  const GAS = "200000000000000";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
              
            //specify the length for the new string  
    var lenString = 7;  
    var randomstring = '';  
  
            //loop to select a new character in each iteration  
    for (var i=0; i<lenString; i++) {  
        var rnum = Math.floor(Math.random() * characters.length);  
        randomstring += characters.substring(rnum, rnum+1);  
    }  

 const  mintstr = async (e)=>{
   console.log("minstr woking");
  e.preventDefault();
  const metadata = await client.store({
  name: title.current.value,
  description: desc.current.value,
  image: new File([filedata], randomstring+'.jpg', { type: 'image/jpg' })
  });
  // const metadata = {
  //   "ipnft": "bafybeibw5mxibhaqo5gzmkanei7hugdfmbypyj6gib2ilibysg26eizjla",
  //   "url": "ipfs://bafybeibw5mxibhaqo5gzmkanei7hugdfmbypyj6gib2ilibysg26eizjla/metadata.json"
  // }
  // const myURLs = new URL(metadata.url);
  // const finalmetadata = myURLs.toJSON()
  // console.log("bruh: ",finalmetadata);
//   const finalurl = "https://"+metadata.ipnft+".ipfs.dweb.link/metadata.json";
//   // console.log(metadata.url,metadata.ipnft)
//   https.get(finalurl, function(res){
//     var body = '';

//     res.on('data', function(chunk){
//         body += chunk;
//     });

//     res.on('end', function(){
//         var fbResponse = JSON.parse(body);
//         console.log("Got a response: ", fbResponse.picture);
//     });
// }).on('error', function(e){
//       console.log("Got an error: ", e);
// });

//   const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
//  await delay(10000)
console.log(metadata);
console.log(metadata.url)
console.log(metadata.data)
const stringsplit = metadata.data.image.href.split("/")
console.log(stringsplit)
const finalimage = "https://"+stringsplit[2]+".ipfs.dweb.link/"+stringsplit[3];
console.log(finalimage);
  const finalmetadata = {
    "title":title.current.value,
    "description":desc.current.value,
    "media": finalimage,
    "copies": 1
  }
 console.log("this is wokring");
//  console.log("finalmetadata: ",finalmetadata);
//  console.log("accountID: ",window.accountId);
//  console.log("account id cakked")
console.log({
  "token_id": window.accountId +"-"+ Date.now(),
  "receiver_id":window.accountId,
  "token_metadata":finalmetadata,
  
})
// await delay(10000)
 await window.contract.nft_mint({
  "token_id": window.accountId + Date.now(),
  "receiver_id":window.accountId,
  "token_metadata":finalmetadata,

}, GAS, deposit);
console.log("function called")



};






  return (
    <div className="register_wrapper">
      <div className="register_player_column_layout_one">
        <div className="register_player_Twocolumn_layout_two">
          <form className="myForm" onSubmit={mintstr}>
            <div className="formInstructionsDiv formElement">
              <h2 className="formTitle">Mint NFT</h2>
              <p className="instructionsText" />
              <div className="register_profile_image">
                
                <input style={{backgroundColor:"gray",borderBlockWidth:"2vh"}} id="profilePic" type="file" onChange={onChangePicture} />
              </div>
              
            </div>
            <br/>
            <div className="fillContentDiv formElement">
              <div className="names formContentElement">
                <input
                style={{backgroundColor:"gray",borderBlockWidth:"2vh"}}
                  className="inputRequest "
                  type="text"
                  placeholder="Title"
                  ref ={title}
                  onChange={onChangetitle}
                />
                <br/>
                <br/>
                <input
                style={{backgroundColor:"gray",borderBlockWidth:"2vh",}}
                  className="inputRequest "
                  type="text"
                  placeholder="Description"
                  ref= {desc}
                  onChange={onChangedesc}
                />
              </div>
            </div>
            <div className="submitButtonDiv formElement">
              <button className="submitButton" type="submit">Mint</button>
            </div>
            <div className="previewProfilePic">
              {console.log(ImageData)}
                <img className="playerProfilePic_home_tile" src={imgData} />
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Mintnft;
