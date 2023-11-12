import React from "react";
import ReactDOM from "react-dom/client";

//reacat Element



//jsx (transppiled before ir reacher the js engine)-Parcel-Babel;
//transpiled means condvert the cont in machine language
//jsx=>React.createElement=>ReactElement-js Object=>HTMLElement(render)
 
const Title =()=> (
  <h1 className="head" tabIndex="5"> 
    Namatate React using jsx 🚀 qowerty0
    </h1>
    );

//react function Component 
const  HeadingComponent = () =>(
  <div id="container">
  <h1>{400+300}</h1>
  {Title()}
  <Title/>
  <Title/>
  <Title></Title>

  {Title}

  <h1 className="head">Namaste React function Component</h1>
  </div> 
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);




