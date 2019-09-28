import React from 'react';
import { Card } from 'semantic-ui-react';

const SmurfCard = props => {
  const { smurf } = props;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{smurf.name}</Card.Header>
        <Card.Meta>Height: {smurf.height}</Card.Meta>
        <Card.Description>{smurf.name} is {smurf.age} years old!</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default SmurfCard;