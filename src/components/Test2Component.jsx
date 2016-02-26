import { Col } from 'react-bootstrap';
import renderChildrenWithProps from 'helpers/renderChildrenWithProps.jsx';

class Test2Component extends React.Component {

  render() {
    return (
      <div>
        <Col xs={4} xsOffset={4}>
          <h1
            onClick={this.props.actions.ENTITY_SHOW}
          >
            Hello {this.props.state.containers.app.test}
          </h1>
          {renderChildrenWithProps(this)}

          <div test="5" lol="3"></div>
        </Col>
      </div>
    );
  }

}

Test2Component.propTypes = {
  actions: React.PropTypes.object,
  state: React.PropTypes.object,
};

export default Test2Component;
