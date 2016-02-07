import React from 'react';
import { Col } from 'react-bootstrap';
import renderChildrenWithProps from 'helpers/renderChildrenWithProps.jsx';

class Test2Component extends React.Component {

  render() {

    return (
      <div>
        <Col xs={4} xsOffset={4}>
          <h1>Hello Test2</h1>
          {renderChildrenWithProps(this)}
        </Col>
      </div>
    )
  }

}

export default Test2Component;
