import React from "react";
import styles from "../User/User.module.css";
import ava from "../../../img/avatar-icon.png";
import axios from "axios";

class User extends React.Component {
  state = {
    person: this.props.userInfo,
    photo: null,
  };

  componentDidMount = () => {
    axios
      .get(`https://213.184.245.66:5010${this.state.person.imgURL}`, {
        auth: {
          username: "fetest",
          password: "root123456",
        },
        responseType: "arraybuffer",
      })
      .then((response) => {
        this.setState({
          photo: Buffer.from(response.data, "binary").toString("base64"),
        });
      });
  };

  showPhoto = () => {
    return !this.props.userInfo.imgURL ? ava : `data:image/jpg;base64,${this.state.photo}`;
  };

  render = () => {
    return (
      <div className={styles.container}>
        <img src={this.showPhoto()} alt="ava" />
        <div>
          {`
               ${!this.props.userInfo.name || this.props.userInfo.name === this.props.userInfo.midname ? "" : this.props.userInfo.name }
               ${!this.props.userInfo.midname ? "" : this.props.userInfo.midname}
               ${this.props.userInfo.surname ? this.props.userInfo.surname : ""}
            `}
        </div>
      </div>
    );
  }
}

export default User;
