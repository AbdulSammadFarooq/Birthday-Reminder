import React,{useState} from "react";
import Data from "../data"
import "../index.css"

const Birthday = (props) => {
    const [value, setValue]= useState(Data)
    
  console.log("Value is ", value);
  // const {image, name, age} = props
  return (
    <>
      <div className="container">
        <div className="child">
            {
                value.map((ele)=>{
                    return(
                        <>
                        <img src={ele.image} alt="Boy" className="pictures" />
                        <h3>{ele.name}</h3>
                        <p>{ele.age}</p>
                        </>
                    )
                })
            }
        </div>
      </div>
      {/* <div style={{padding:"70px, 0", marginTop:"100px", backgroundColor:"white", textAlign:"center", width:"100px",height:"500px"}} > */}
      {/* <img src={image} alt="" style={{borderRadius:"50%", maxWidth:"3%", height:"1%"}} />
                <h2>{name}</h2>
                <p>{age}</p> */}
      {/* </div> */}
    </>
  );
};

export default Birthday;
