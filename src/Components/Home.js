import React, { useState,useEffect } from 'react';
import {Tab} from "bootstrap";
import {Table,Container,Button} from "react-bootstrap";
const Home = props => {
    useEffect(() => {
        const url = "https://api.nft.storage/?after=2020-07-27T17%3A32%3A28Z&limit=10";
        const fetchData = async () => {
          try {
            const response = await fetch(url,{
                method: "GET",
                headers: {"accept": "application/json",'Authorization':"Bearer "+process.env.REACT_APP_API_KEY}
              });
            const json = await response.json();

            console.log(json);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
//     const promptList = ["Who would win in Smash Bros?",
// "Who is the better actor",];
const [nftList,setnftList] = useState(null)
// nftList = [["https://img.redbull.com/images/c_crop,x_0,y_0,h_1080,w_1620/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2017/08/29/03820845-b090-444f-86d1-e5259d11482f/most-heroic-pokemon.jpg.jpg","Dragonite","20N"],
// ["https://www.gamebyte.com/wp-content/uploads/2018/08/Pokemon.jpg","Ash and pikachu"," 69N"],
// ["https://cdn.vox-cdn.com/thumbor/s9klxW75sFZASNdvlmRqpTancF8=/171x164:1219x754/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/49858761/Screen_Shot_2016-06-14_at_6.23.47_PM.0.0.png","random","200N"],["https://img.redbull.com/images/c_crop,x_0,y_0,h_1080,w_1620/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2017/08/29/03820845-b090-444f-86d1-e5259d11482f/most-heroic-pokemon.jpg.jpg","Dragonite","20N"],
// ["https://www.gamebyte.com/wp-content/uploads/2018/08/Pokemon.jpg","Ash and pikachu"," 69N"],
// ["https://cdn.vox-cdn.com/thumbor/s9klxW75sFZASNdvlmRqpTancF8=/171x164:1219x754/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/49858761/Screen_Shot_2016-06-14_at_6.23.47_PM.0.0.png","random","200N"],["https://img.redbull.com/images/c_crop,x_0,y_0,h_1080,w_1620/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2017/08/29/03820845-b090-444f-86d1-e5259d11482f/most-heroic-pokemon.jpg.jpg","Dragonite","20N"],

// ["https://www.gamebyte.com/wp-content/uploads/2018/08/Pokemon.jpg","Ash and pikachu"," 69N"],
// ["https://cdn.vox-cdn.com/thumbor/s9klxW75sFZASNdvlmRqpTancF8=/171x164:1219x754/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/49858761/Screen_Shot_2016-06-14_at_6.23.47_PM.0.0.png","random","200N"]]

return (
        <Container style={{minHeight:"100vh",marginTop:'5vh'}} className='justify-content-center  d-flex flex-wrap '>
                
                        {/* {
                            nftList.map((el,index)=>{
                                //    console.log(el[0])
                                   return(
                                       <div key={index} style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '2vw',
                                        height:'20vh',
                                        alignItems:'center',
                                        textAlign:"center"
                                    }} className="mx-auto flex-column d-flex justify-content-center align-items-center" >
                                           <img src={el[0]} style = {{maxHeight:"40vh",maxWidth:"25vh"}} />
                                           <div>{el[1]}</div>
                                           <div>{el[2]}</div>
                                       </div>
                                   )

                            })
                        } */}
                        hi
        </Container>

    );
};


export default Home;