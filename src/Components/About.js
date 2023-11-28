import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }
  render(){
    return (
      <div>
      <h1>About Class Component</h1>
      <h2>this is react web series</h2>
      <UserClass name={"Ashutosh Singh (class)"} location={"Bangaluru"}></UserClass>
      </div>
    );
  }
}




/**
 * Parent Constructor
 * Parent Render
 *  -Ashutosh construcot
 *  -Ashutosh Render
 *  -Ashutosh ComponentDiMount
 *  -Elon constructor
 *  -elon Render
 *  -Elon ComponentDiMount
 * 
 * Parent ComponentDiMount
 */

export default About;