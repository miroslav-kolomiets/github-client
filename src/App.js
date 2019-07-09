import React from 'react';
import Loader from './components/Loader/Loader';
import Dashboard from './components/Dashboard/Dashboard';
import SearchForm from './components/SearchForm/SearchForm';
import UserCard from './components/UserCard/UserCard';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      repos: [],
      data: [],
      isLoading: true,
      userData: []
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
    this.getUserData(name);
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

  getUserData = name => {
    const url = `https://api.github.com/users/${name}`;
    if (name) {
      fetch(url)
      .then(response => {
        if(response.ok) return response.json();
        alert('Request failed.');
        throw new Error('Request failed.');
      })
      .then(data => {
        this.setState({
          userData: data,
          isLoading: false
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
          repos: data,
          isLoading: false
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
    const userData = this.state.userData;
    const isLoading = this.state.isLoading;

    return (
        <React.Fragment>
            <SearchForm 
                name={this.state.name}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
            <main className="content">
                {isLoading ? null: <UserCard userData={userData}/>}
                {isLoading ? <Loader /> : <Dashboard data={data}/>}
            </main>
            <Footer />
        </React.Fragment>
    )
  }
}

export default App;
