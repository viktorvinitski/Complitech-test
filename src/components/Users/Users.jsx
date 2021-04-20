import React from "react";
import styles from "../Users/Users.module.css";
import axios from "axios";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import User from "./User/User";

class Users extends React.Component {
  state = {
    persons: [],
    currentPage: 1,
    currentUsersStart: 0,
  };

  componentDidMount = () => {
    axios
      .get("https://213.184.245.66:5010/api/get_all_people", {
        auth: {
          username: "fetest",
          password: "root123456",
        },
      })
      .then((response) => {
        this.setState({
          persons: response.data.data.people.map((person) => {
            return {
              id: person.id,
              name: person.name,
              midname: person.midname,
              surname: person.surname,
              imgURL: person.image_ref,
            };
          }),
        });
      });
  };

  onPageChange = (page) => {
    this.setState({
      currentPage: page,
      currentUsersStart: page * 15 - 15,
    });
  };

  showUsers = () => {
    return this.state.persons
      .map((p) => <User key={p.id} userInfo={p} />)
      .splice(this.state.currentPage === 1 ? 0 : this.state.currentUsersStart, 15);
  };

  render = () => {
    return (
      <div className={styles.container}>
        <div className={styles.list}>{this.showUsers()}</div>

        <Pagination
          currentDefault={this.state.currentPage}
          defaultPageSize={15}
          onChange={this.onPageChange}
          showSizeChanger={false}
          total={259}
        />
      </div>
    );
  };
}

export default Users;
