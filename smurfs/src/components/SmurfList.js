import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import SmurfCard from './SmurfCard';
import { loadSmurfs } from '../actions';

const SmurfList = props => {
  const { smurfs, loadSmurfs } = props;

  useEffect(() => {
    loadSmurfs();
  }, [smurfs])

  return (
    <Card.Group centered>
      {smurfs.map(smurf => (
        <SmurfCard smurf={smurf} />
      ))}
    </Card.Group>
  )
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect(mapStateToProps, {loadSmurfs})(SmurfList);