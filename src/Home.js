import React from 'react'
import { API } from 'aws-amplify'

export default class Home extends React.Component{
    
    
    
 

state={people:[]}
async componentDidMount(){
const data=await API.get('peopleapi', '/people');

console.log(data);
    
}
    render()    {
        return(
            <div>
            <h1>Home Component</h1>
            </div>
            )
    }
    
}