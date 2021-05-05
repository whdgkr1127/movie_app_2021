import React from 'react';


function Food({name,picture}){
  return (
    <div>
      <h3>I love {name}</h3>
      <img src={picture}/>
      </div>
  )
  }

  const foodLike = [ 
  { 
    name:"Kimchi",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjVfNCAg%2FMDAxNjE2NjI4OTI1NTU1.v-MI19peGnncgwviCprdnyJD0lPfGEECOEqh525BMHQg.xenozKFAqsP2eqqYNCMQwgs6gXZ2UFCgvL0WCco4FvMg.JPEG.daeho7238%2F%25C4%25B8%25C3%25B3.PNG&type=a340"
  },
  { 
    name:"Kimbap",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMTZfMjAx%2FMDAxNjE1ODIwNjQ0NzI5.81QQBB3GTKo-z0eAa_3KwyvsDmyFB_FdiA67jeaIS4cg.WjU11NEjOQ_vsfHcahyEY-1hvPs9o9uAvP1ptkFLwzcg.JPEG.enmars%2F20210129%25A3%25DF185526.jpg&type=a340"
  },
  { 
    name:"Bibimabap",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjZfMjcy%2FMDAxNjE2NzQ5NDgwMzU5.IUiZqh2rRmdFvI7N8P_L9DwyShZp8kMTshCe5YkC44Ig.uPvZtpQtTDFSluFfagylnb08Ns8NAZYCjPiLQ56KPWUg.JPEG.minssun%2FP1011521.JPG&type=a340"
  },
  { 
    name:"samgyeopsal",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjNfOTkg%2FMDAxNjE2NDk4MjIxNzEw.8v4xW7ewYxm3cLGjOayae9IITorapaz70S-XAtA4OWUg.DfuBYUnUZd1iTw1DJYDU2BSNnHnnvG_0nm76CeXJx7sg.JPEG.mdh4902%2Foutput_1660205915.jpg&type=a340"
  }

]
   
    
   
   
  

function App() {
  return <div>
    <h1>Hello!!!!!</h1>
    {foodLike.map(dish =><Food name={dish.name} picture={dish.image}/>)}
    </div>
}

export default App;
