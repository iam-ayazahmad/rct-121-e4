import { useEffect, useState } from "react";



export const Companies=()=>{

    const [data, setData] = useState([]);

    const [isload,setIsloading]=useState(true)
    
    useEffect(()=>{
        async function getData(){
          setIsloading(true)
          const mydata= await fetch(`http://localhost:8080/data`).then((d)=>d.json())
     
          setData(mydata)
          setIsloading(false)
          
        }
        getData()
     
      },[])

      const [show,setShow]=useState(false)
    return(
        <div>
            <h1><button onClick={()=>{setShow(!show)}}>{show?"-":"+"}</button> Companies Page</h1>
            {isload==true && <div id="loading-container">...Loading</div>}

            
          {show?null:<div>
          {data.map((item) => {return(
     

     <p style={{border:"2px solid black" ,margin:"0px 40%"}}>{item.company}</p>
    
   
                     
) })
 }
          </div>}

        </div>
    )
}