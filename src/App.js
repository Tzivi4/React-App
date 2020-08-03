import React, { Component } from 'react';
import Nav from './components/Nav';
import Result from './components/Result';

class App extends Component {

  state = {
    term: '',
    images: [],
    page: ''
  }

  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start');
  }

  lastPage = () => {
    //Leer state de la página actual
    let page = this.state.page;
    //Condicional, sí la página es 1 no retroceder
    if (page === 1) return null;
    //Restarle 1
    page--;
    //Agregar el cambio al state
    this.setState({
      page
    }, () => {
      this.consult();
      this.scroll();
    });
  }

  nextPage = () => {
    //Leer state de la página actual
    let page = this.state.page;
    //Sumarle 1
    page++;
    //Agregar el cambio al state
    this.setState({
      page
    }, () => {
      this.consult();
      this.scroll();
    });
  }

  consult = () => {
    const searchTerm = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=17755342-06f994d15e6571417e48376d6&q=${searchTerm}&page=${page}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({ images: result.hits }))
  }

  searchData = (term) => {
    this.setState({
      term,
      page: 1
    }, () => {
      this.consult();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>

          <Nav
            searchD={this.searchData}
          />

        </div>
        <div className="row justify-content-center">
          <Result
            images={this.state.images}
            lastPage={this.lastPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
