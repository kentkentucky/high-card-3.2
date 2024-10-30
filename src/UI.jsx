import Row from 'react-bootstrap/Row';

import "./UI.css";

function UI({cards})
{
    // You can access your current components state here, as indicated below
    const currCardElems = cards.map(({ name, suit }) => (
        // Give each list element a unique key
        <div key={`${name}${suit}`}>
        {name} of {suit}
        </div>
    ));

    return (
        <Row className='row'>
            {currCardElems}
        </Row>  
    );
}

export default UI;