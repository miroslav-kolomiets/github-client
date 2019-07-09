import React from 'react';
import Loader from './components/Loader/Loader';
import Dashboard from './components/Dashboard/Dashboard';
import SearchForm from './components/SearchForm/SearchForm';
import UserCard from './components/UserCard/UserCard';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import getUserData from './utils/getUserData';
import getRepos from './utils/getRepos';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      repos: [],
      data: [],
      isLoading: true,
      userData: [],
      error: false
    };
  }

  getUrlParam = () => {
    this.getRepos = getRepos.bind(this);
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
    this.setState({error: false});
  }

  closeModal = event => {
    event.preventDefault();
    this.setState({error: false});
  }

  handleSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    this.getRepos = getRepos.bind(this);
    this.getUserData = getUserData.bind(this);
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

  render() {
    const data = this.state.data;
    const error = this.state.error;
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
          {error ? <Modal closeModal={this.closeModal}/> : null}
      </React.Fragment>
    )
  }
}

export default App;
