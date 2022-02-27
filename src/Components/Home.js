import React, { useState,useEffect } from 'react';
import {Tab} from "bootstrap";
import {Table,Container,Button} from "react-bootstrap";
const Home = props => {
    var nftList = [];
    const [statelist,setstatelist] = useState(null);
    const [counter,setcounter] = useState(null);
    useEffect(() => {
        
        const cid_call = async(bruh) => {
            try{
            const resp = await fetch(bruh,{
                method:"GET",
                header:{"accept": "application/json"}
            })
            const respt = await resp.json();
            // console.log(respt);
            const temp = ["https://ipfs.io/ipfs/"+respt.image.slice(7),respt.name,respt.description];
            // console.log(temp);
            nftList.push(temp)
            if (nftList.length){
                // console.log(nftList)
                setstatelist(nftList)
                setcounter(nftList.length)
                // console.log(statelist)
            }
            // console.log(statelist)
            // console.log(nftList);
            return respt}
            catch (error) {
                console.log("error", error);
              }
        }
        const url = "https://api.nft.storage/?after=2020-07-27T17%3A32%3A28Z&limit=20";
        const fetchData = async () => {
          try {
            const response = await fetch(url,{
                method: "GET",
                headers: {"accept": "application/json",'Authorization':"Bearer "+process.env.REACT_APP_API_KEY}
              });
            const json = await response.json();

            // console.log(json);
            var arr = [];
            Object.keys(json.value).forEach(function(key) {
            // console.log(json.value[key].cid)
            const cid_url = "https://ipfs.io/ipfs/" +json.value[key].cid +"/metadata.json";
            cid_call(cid_url);
            
            // console.log(nftList)
            // console.log(statelist);
            });
            const test = await setstatelist(nftList);
          }
           catch (error) {
            console.log("error", error);
          }
        };
        
        fetchData();
        
    }, []);
//     const promptList = ["Who would win in Smash Bros?",
// "Who is the better actor",];
return (
        <Container style={{minHeight:"100vh",marginTop:'5vh'}} className='justify-content-center  d-flex flex-wrap '>
                       {statelist===null?"loading...":
                       statelist.map((el,index)=>{
            //    console.log(el[0])
               return(
                   <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '2vw',
                    height:'20vh',
                    alignItems:'center',
                    textAlign:"center",
                    margin:"2vw"
                }} className="mx-auto flex-column d-flex justify-content-center align-items-center" >
                    {/* {console.log(el[0],el[1],el[2])} */}
                       <img src={el[0]} style = {{maxHeight:"40vh",maxWidth:"25vh"}} />
                       <div>{el[1]}</div>
                       <div>{el[2]}</div>
                   </div>
               )

        })}
        </Container>

    );
};


export default Home;