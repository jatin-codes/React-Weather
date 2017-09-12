var React = require('react');
var Nav = require ('Nav');
var Weather = require ('Weather');
var Examples = require('Examples');

var Main = (props) => {
    return (
            <div>
                <Nav/>
                <h2>This is a main Component</h2>
                {props.children}
            </div>
        );
}

module.exports = Main;