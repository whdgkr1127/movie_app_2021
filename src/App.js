import React from 'react';

class App extends React.Component{
  state = {
    isLoading:true,
    movie:true
  }

  componentDidMount(){
    setTimeout(() => { //delay function이다.
      this.setState({ isLoading:false })
    }, 6000)
  }

  render(){
   const { isLoading } = this.state;
    return  <div>{isLoading ? "Loading...":"We are ready"}</div>; 
     }
}


export default App;

