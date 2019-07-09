export default function getUserData(name) {
  const url = `https://api.github.com/users/${name}`;
  if (name) {
    fetch(url)
    .then(response => {
      if(response.ok) return response.json();
      this.setState({error: true});
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
      this.setState({error: true});
    });
  } else {
    this.setState({error: true});
  }
}
