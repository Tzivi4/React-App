import React from 'react';

const Pages = props => {
    return(
        <div className="py-3">
            <button onClick={props.lastPage} type="button" className="btn btn-info mr-1">Anterior &larr;</button>
            <button onClick={props.nextPage} type="button" className="btn btn-info">Siguiente &rarr;</button>
        </div>
    );
}

export default Pages;