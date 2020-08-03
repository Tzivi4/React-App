import React, { Component } from 'react';

class Nav extends Component {

    Ref = React.createRef();

    getData = (e) => {
        e.preventDefault();
        //Tomamos el valor del input
        const term = this.Ref.current.value
        //Lo enviamos al componente principal
        this.props.searchD(term);
    }

    render() {
        return(
            <form onSubmit={this.getData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.Ref} type="text" className="form-control form-control-lg" placeholder="Ejemplo 'Café'"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Nav;
