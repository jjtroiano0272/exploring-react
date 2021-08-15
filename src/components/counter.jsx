import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count) === 0 ? "warning" : "primary";

        return classes;
    }
    
    formatCount() {
        const {count} = this.state; // Object destructuring
        return count === 0 ? "Zero" : count;
    }
    
    render() {
        // Left off at 45:00
        return  (
            <div>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                {/* <ul style="list-item-type: none"> */}
                <ul style={{ listStyleType: "none" }}>
                    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
                </ul>
            </div>
        ); 
    }
}
 
export default Counter;