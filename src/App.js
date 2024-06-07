import React from 'react'
import './App.css';

class App extends React.Component {
 constructor(props){
  super(props)
  this.state={Person:{
    fullName:"Faker",
    bio:"Faker has won four World Championships (2013, 2015, 2016, 2023, the most of any player) and 2 Mid-Season Invitationals (2016, 2017), and has 10 combined LCK and Champions Korea titles.", 
    imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOUW8ZDG1coAM4VGaNDstOZCRyh_QkBOFUg&s",
     profession:"Gamer",
    }  
    , show: false , Mounted:0}
    }

 handleShowPerson = () => {
  
  var btn=document.getElementById('btn')
  if (!this.state.show){
    this.setState({ show: !this.state.show });
    btn.innerHTML="Hide Profile";
  } else { this.setState({ show: !this.state.show }); 
  btn.innerHTML="Show Profile"
}};
componentDidMount(){
this.interval= setInterval(()=>{
 this.setState({Mounted:this.state.Mounted+1})
},1000) 
 
};
render (){
  return (
    <>
      {this.state.show && (
        <>
          <h1>{this.state.Person.FullName}</h1>
          <h1>{this.state.Person.bio}</h1>
          <img src={this.state.Person.imgSrc} alt="Naruto"></img>
          <h1>{this.state.Person.profession}</h1>
          <p>Componed Mounted {this.state.Mounted} second ago </p>
          <br></br>
        </>
      )}

      <button id='btn' onClick={this.handleShowPerson}>Show Profile</button>
    </>
  );
}
};

export default App ;




/* import React, { Component } from 'react'

export default class App extends Component {
   constructor(props){
     super(props)
     this.state={count:0}
   }
   
  componentDidMount(){
    console.log('Conmponed Mounted');
  }
  componentDidUpdate(prevProps,prevState){
     console.log('Componed Updated');
  }
   Increment=()=>{
      this.setState({count:this.state.count+1})
  }

 
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.Increment} >+</button>
      </div>
    )
  }
}
 */