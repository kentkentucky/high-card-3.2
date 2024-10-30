import Row from 'react-bootstrap/Row';

import "./Card.css";

function Card({cards})
{
    // You can access your current components state here, as indicated below
    const cardImage = cards.map(({ name, suit }) => {
        const fileName = `${name.toLowerCase()}_of_${suit.toLowerCase()}.png`;

        try {
            return (
                <div key={`${name}${suit}`}>
                    <img src={`./cards-png/${fileName}`} className='card'/>
                </div>
            );
        }
        catch (error) {
            console.log("Image not found!");
        }
    });

    return (
        <Row>
            {cardImage}
        </Row>
    );
}

export default Card;