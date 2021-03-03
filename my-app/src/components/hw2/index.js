import React from 'react';
import data from './data.json';
import './styles.css'

class PeopleList extends React.Component {
    render() {
        return(
            <div>
                {data.map((element, i, data) =>  <div key = {element._id} className="people"><p>{element.name.first}</p><p>{element.name.last}</p></div>)}
            </div>
        )
    }
}

export default PeopleList;