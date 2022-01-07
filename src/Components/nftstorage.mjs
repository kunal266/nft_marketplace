import React, { useState, useRef, useEffect } from "react";
import { NFTStorage,File } from 'nft.storage/dist/bundle.esm.min.js'

import fs from 'fs'

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGY2YTlBNDgxZDM1ZWZhMEJmNTUwRkVDY2I5YjJjMzYyRDREQzIwNzQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MDUxNjM2OTU3OSwibmFtZSI6InN1cGFzdGF6eiJ9.YqCV_iWK8HPupN6h1tILk14TLfMqG51GY_gCDDz5R5Y'
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