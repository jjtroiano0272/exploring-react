import React, { Component } from 'react';

class Counter extends Component {
  // Functions in JS ARE OBJECTS
  // constructor() {
  // 	super();
  // 	this.handleIncrement = this.handleIncrement.bind(this);
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log('previous props: ', prevProps);
    console.log('previous state: ', prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call & get new data from server
    }
  }

  componentWillUnmount() {
    console.log('counter UNmounted.');
  }

  // state includes data local/private to that component

  styles = {
    fontSize: 10,
    fontWeight: 'bold',
  };

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? <h1>Zero</h1> : count;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>'N'il ya pas des tagues!'</p>;

    return (
      <ul style={{ listStyleType: 'none' }}>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log('counter(sub) rendered!');

    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm'
        >
          +
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>

        {/* A 'truthy' expression: if the first n operands are true, the final one is evaulated.
                     Strings in JS are truthy as well as numbers > 0. */}
        {/* {this.state.tags.length === 0 && 'Please create a new tag.'}
        {this.renderTags()} */}
      </div>
    );
  }
}

export default Counter;
