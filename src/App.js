import React from 'react';

class App extends React.Component{
  state = {
    isLoading:true,
    movie:true//state는 필수가 아니다.
  }

  componentDidMount(){
    setTimeout(() => { //delay function이다.
      this.setState({ isLoading:false })
    }, 6000)//밀리터리 단위이기 때문에 1초는 1000으로 표현한다.
  }

  render(){
   const { isLoading } = this.state;//state 안에있는 isLoading을 불러오는 코드이다.(ES6 참고)
    return  <div>{isLoading ? "Loading...":"We are ready"}</div>; 
     }
}


export default App;

