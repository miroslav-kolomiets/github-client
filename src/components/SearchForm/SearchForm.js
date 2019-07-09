import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {

  render() {
    const {handleChange, handleSubmit, name} = this.props;
    
    return (
      <header>
        <form 
            onSubmit={handleSubmit} 
            className='search-form'
        >
          <label>
            <input 
                placeholder="User Name" 
                type="text" 
                value={name} 
                onChange={handleChange} 
                className='search-input' 
            />
          </label>
          <input type="submit" value="Get repositories" className='search-submit-btn' />
        </form>
      </header>
    )
  }
}

export default SearchForm;
