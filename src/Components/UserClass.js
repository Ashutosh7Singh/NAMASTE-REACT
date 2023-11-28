import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
        avatar_url: "http:Dummy poto",
      },
    };

    console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");

    const data = await fetch(" https://api.github.com/users/Ashutosh7Singh");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did update");
  }
  
  componentwilUnmount(){
    console.log("component will unmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact :@Ashutosh7Singh</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * Constructor is call and update with dummy data;
 * Render is call and update with dummy data
 *    <HTML call with Dummy Data>
 *  Component Did Mount
 *  <Api Call>
 * <this.State>
 *
 * now Moutnign cycle is complete
 * -now the update cycle begings
 *  -Render method is called and having (API data)
 *  -<HTML> is loaded or webpages is loaded
 * then ComponenedidUpdate is call
 *
 *
 *
 * now the whole lifecycle works
 */
