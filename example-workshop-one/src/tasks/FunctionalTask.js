import React, { useState } from 'react';

function Task(props) {
    let [accepted, setAccepted] = useState(false)

    return(
        <div className={`Task Task-Accepted__${accepted}`}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            {accepted && <p>This task has been accepted.</p>}
            <button onClick={() => setAccepted(!accepted)}>Accept task</button>
        </div>
    )
}

export default Task;