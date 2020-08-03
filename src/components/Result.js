import React, { Component } from 'react';
import Art from './Art'
import Pages from './Pages'

class Result extends Component {
    showImages = () => {

        const varImages = this.props.images;

        if (varImages.length == 0) return null;

        console.log(varImages);

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {varImages.map(art => (
                        <Art
                            img = {art}
                            key = {art.id}
                        />
                    ))}
                </div>
                <Pages
                lastPage={this.props.lastPage}
                nextPage={this.props.nextPage}
                />
            </React.Fragment>

        )
    }

    render() {
        return (
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
        );
    }
}
export default Result;