import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

class List extends Component{


    constructor(){
        super()
        this.state={
            posts:[],
            
            
        }
    }




    render(){
        
         const data = this.state.posts.map(post=> 
            <tr key={post.id}> 
            
           
            <td><Image src={post.countryInfo.flag}  roundedCircle/></td>
             <td>{post.country}</td> 
             <td>{post.cases}</td>
             
              </tr>  )
        return(
            
            
            <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                      
                        <th>FLAG</th>
                        <th>Countries</th>
                        <th>Cases</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </Table>
            </>
        )
    }

    componentDidMount(){
        axios.get('https://corona.lmao.ninja/countries')
        .then(res=>{
            this.setState({posts : res.data})
            console.log(res)
        })

        .catch(error => {
            console.log('eror')
        })

    }
    
}


export default List;