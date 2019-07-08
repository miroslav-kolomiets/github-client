import React from 'react';

class UserRepos extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      repos: [],
      data: []
    };
  }

  getUrlParam = () => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const username = url.searchParams.get("username");
    if (username) {
      this.setState({name: username});
      this.getRepos(username);
    }
  }

  componentDidMount() {
    this.getUrlParam();
  }

  handleChange = event => {
    this.setState({name: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    this.getRepos(name);
  }

  getData = () => {
    const data = [];
    const repos = this.state.repos;

    Object.values(repos).forEach(value => {
      data.push({
          "url" : value.html_url,
          "description" : value.description,
          "id" : value.id
        })
    });

    this.setState({data: data})
  }

  getRepos = name => {
    const url = `https://api.github.com/users/${name}/repos`;
    if (name) {
      fetch(url)
      .then(response => {
        if(response.ok) return response.json();
        alert('Request failed.');
        throw new Error('Request failed.');
      })
      .then(data => {
        this.setState({
          repos: data
        });
        this.getData();
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
    } else {
      alert('Please enter name.')
    }
  }

  render() {
    const data = this.state.data;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className='search-form'>
          <label>
            <input placeholder="User Name" type="text" value={this.state.name} onChange={this.handleChange} className='search-input' />
          </label>
          <input type="submit" value="Get repositories" className='search-submit-btn' />
        </form>
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
    );
  }
}

export default UserRepos;
