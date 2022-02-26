import React, { useState, useRef, useEffect } from "react";
import { NFTStorage,File } from 'nft.storage/dist/bundle.esm.min.js'

import fs from 'fs'

const apiKey = process.env.REACT_APP_API_KEY
const client = new NFTStorage({ token: apiKey })

 async function  mintstr(){
   await client.store({
  name: "namee",
  description: "desc",
  image: new File([await fs.promises.readFile("./pikachu.jpg")], 'pinpie.jpg', { type: 'image/jpg' })
})
console.log(metadata.url)}
mintstr();
// metadata("bruh","bruh indeed","pikachu.jpg")
export default metadata