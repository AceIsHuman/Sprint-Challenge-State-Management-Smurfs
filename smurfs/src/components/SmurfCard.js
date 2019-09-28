import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const SmurfCard = props => {
  const { smurf, deleteSmurf } = props;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{smurf.name}</Card.Header>
        <Card.Meta>Height: {smurf.height}</Card.Meta>
        <Card.Description>{smurf.name} is {smurf.age} years old!</Card.Description>
        <Icon className="delete" name="trash alternate outline" onClick={() => deleteSmurf(smurf.id)}/>
      </Card.Content>
    </Card>
  )
}

export default connect(null, { deleteSmurf })(SmurfCard);