import React from 'react';

require('styles/AppComponent.sass');

class App extends React.Component {

  render() {

    return (
      <div>

        <h1>Mount Olympus</h1>

        <input type="text" value={this.props.app.input} onChange={(e) => {
          this.props.actions.CHANGE_INPUT_APP_COMPONENT({
            value: e.target.value.trim()
          })
        }}/>

        <button  onClick={() => this.props.actions.ADD_ENTITY({
          name: this.props.app.input
        })}>Add entity</button>

        {this.props.entity.data.length > 0 ?
          <p>
            <small><i>Click on the entity to delete it</i></small>
          </p>
        : null}

        <ul>
          {this.props.entity.data.map((entity, i) => {
            return <li key={i} onClick={() => {
              this.props.actions.REMOVE_ENTITY({
                index: i
              })
            }}>{entity.name}</li>
          })}
        </ul>
      </div>
    )
  }

}

export default App;
