import React from 'react';
import { Col } from 'react-bootstrap';
import renderChildrenWithProps from 'helpers/renderChildrenWithProps.jsx';

class Test2Component extends React.Component {

  render() {
    console.log('test2', this);
    return (
      <div>
        <Col xs={4} xsOffset={4}>
          <h1 onClick={this.props.actions.ENTITY_SHOW}>Hello Test2</h1>
          {renderChildrenWithProps(this)}
        </Col>
      </div>
    )
  }

}

export default Test2Component;
