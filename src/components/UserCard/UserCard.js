import React from 'react';
import './UserCard.css';

class UserCard extends React.Component {

  render() {
    const userData = this.props.userData;

    return (
      <div className="user-card">
        <div className="user-avatar-wrapper">
            <img className="user-avatar" src={userData.avatar_url} alt="avatar"/>
        </div>
        <p className="user-name">{userData.name}</p>
        <p className="user-company">{userData.company}</p>
        <p className="user-profile"><a href={userData.html_url}>user profile</a></p>
        <p className="user-bio">{userData.bio}</p>
      </div>
    )
  }
}

export default UserCard;
