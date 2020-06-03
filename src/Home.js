import React from 'react'
import { API } from 'aws-amplify'

export default class Home extends React.Component{
    
    
    
 

state={people:[]}
async componentDidMount(){
const data=await API.get('peopleapi', '/people')

this.setState({people:data.people})    
    
}
    render()    {
        return(
            <div>
            <h1>Home Component {this.state.people.map((person,i)=>{
                <b>{person.name}</b>
            })}</h1>
            </div>
            )
    }
    
}