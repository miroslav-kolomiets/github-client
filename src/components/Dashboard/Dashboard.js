import React from 'react';
import './Dashboard.css';

class Dashboard extends React.Component {

  render() {
    const data = this.props.data;

    return (
      <div>
        <ul className='results'>
          {data.map((data) => {
            return (
              <li key={data.id} className='results-items'>
                <a href={data.url} className='results-link'>{data.url}</a>
                <p className='results-description'>{data.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Dashboard;
