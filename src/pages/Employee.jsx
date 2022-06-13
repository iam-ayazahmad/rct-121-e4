import {
    Table,
    Thead,
    Tbody,
    
    Tr,
    Th,
    Td,
    
    TableContainer,
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'



export const Employee=()=>{

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
  console.log(data)
    return(
        <div>
            <h1>Employee Page</h1>
            {isload==true && <div id="loading-container">...Loading</div>}
            


            

    <TableContainer>

  <Table variant='simple'>
    
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>EMPLOYEE NAME</Th>
        <Th >COMPANY NAME</Th>
        <Th >CTC</Th>
        <Th >VIEW DETAIL</Th>
        <Th >DELETE</Th>
        <Th >EDIT</Th>
      </Tr>
    </Thead>
    <Tbody>
    
 {data.map((item) => {return(
        <Tr>
        <Td>{item.id}</Td>
        <Td>{item.employee_name}</Td>
        <Td >{item.company}</Td>
        <Td>{item.ctc}</Td>
        <Td><button >View </button></Td>
        <Td ><button>Delete</button></Td>
        <Td ><button>Edit</button></Td>
      </Tr>
                        
  ) })
    }
     
      
    </Tbody>
    
  </Table>
</TableContainer>
            

        </div>
    )
}