var React = require('react');
var Nav = require ('Nav');
var Weather = require ('Weather');
var Examples = require('Examples');

var Main = (props) => {
    return (
            <div>
                <Nav/>
                <div className="row">
                    <div className="columns medium-6 large-7 small-centered">
                        {props.children}
                    </div>
                </div>
            </div>
        );
}

module.exports = Main;