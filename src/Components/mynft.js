import React,{useEffect,useState} from 'react';
import {Tab} from "bootstrap";
import {Table,Container,Button} from "react-bootstrap";
const Mynft = props => {
    const [nftbruh,setnftowned]= useState(null);
    useEffect(async ()=>{
        const nft_owned = await window.contract.nft_tokens_for_owner({"account_id":window.accountId});
        console.log("nft owned",nft_owned);
        setnftowned(nft_owned);
    },[])
    const promptList = ["Who would win in Smash Bros?",
"Who is the better actor",];
console.log("bft_bruh",nftbruh);
    return (
<Container style={{minHeight:"100vh",marginTop:'5vh'}} className='justify-content-center  d-flex flex-wrap '>
                
                {nftbruh===null?"loading":
                    nftbruh.map((el,index)=>{
                           console.log(el)
                           return(
                               <div key={index} style={{
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '2vw',
                                height:'20vh',
                                alignItems:'center',
                                textAlign:"center"
                            }} className="mx-auto flex-column d-flex justify-content-center align-items-center" >
                                   <img src={el.metadata.media} style = {{maxHeight:"40vh",maxWidth:"25vh"}} />
                                   <div>{el.metadata.title}</div>
                                   <div>{el.metadata.description}</div>
                               </div>
                           )

                    })
                }
</Container>
    );
};

export default Mynft;