/**
 * Created by Barrett on 9/24/2016.
 */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Jobs } from '../api/jobs.js';
import Job from './Job.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';

// App component - represents the whole app
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideCompleted: false,
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const title = ReactDOM.findDOMNode(this.refs.titleInput).value.trim();
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        var categories = text.split(',');
        const premium = ReactDOM.findDOMNode(this.refs.premiumInput).checked;
        const doneBy = ReactDOM.findDOMNode(this.refs.doneByDate).value;
        const estTime = ReactDOM.findDOMNode(this.refs.estimatedTime).value;
        const estPrice = ReactDOM.findDOMNode(this.refs.estimatedPrice).value;

        Jobs.insert({
            title: title,
            category: categories,
            premium: premium,
            doneBy: doneBy,
            estTime: estTime,
            estPrice: estPrice,
            createdAt: new Date(), // current time
            owner_id: Meteor.userId(), // id of logged in user
            owner: Meteor.user(),
            completed: false,
            username: Meteor.user().username, // username of logged in user
        });

        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
        ReactDOM.findDOMNode(this.refs.titleInput).value='';
        ReactDOM.findDOMNode(this.refs.premiumInput).checked = false;
        ReactDOM.findDOMNode(this.refs.doneByDate).value = '';
        ReactDOM.findDOMNode(this.refs.estimatedTime).value = '';
        ReactDOM.findDOMNode(this.refs.estimatedPrice).value = '';
    }

    toggleHideCompleted() {
        this.setState({
            hideCompleted: !this.state.hideCompleted,
        });
    }

    renderJobs() {
        let filteredJobs = this.props.jobs;
        if (this.state.hideCompleted) {
            filteredJobs = filteredJobs.filter(job => !job.checked);
        }
        return filteredJobs.map((job) => (
            <Job key={job._id} job={job} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>All Jobs ({this.props.incompleteCount})</h1>

                    <label className="hide-completed">
                        <input
                            type="checkbox"
                            readOnly
                            checked={this.state.hideCompleted}
                            onClick={this.toggleHideCompleted.bind(this)}
                        />
                        Hide Completed Jobs
                    </label>

                    <AccountsUIWrapper />
                    { this.props.currentUser ?
                    <form className="new-job" onSubmit={this.handleSubmit.bind(this)} >
                        <input
                            type="text"
                            ref="titleInput"
                            placeholder="Type to add title of job"
                        />
                        <input
                            type="text"
                            ref="textInput"
                            placeholder="Type to add a new job category"
                        />
                        <input
                            type="checkbox"
                            ref="premiumInput"
                            placeholder="Would you like premium service?"
                        />
                        Premium Service
                        <input
                            type="date"
                            ref="doneByDate"
                            placeholder="When the job should be finished by"
                        />
                        <input
                            type="number"
                            ref="estimatedTime"
                            placeholder="How long do you expect the job to take?"
                        />
                        <input
                            type="number"
                            ref="estimatedPrice"
                            placeholder="Estimated payment for the work"
                        />
                        <input type="submit" value="Submit"/>
                    </form> : ''
                    }
                </header>

                <ul>
                    {this.renderJobs()}
                </ul>
            </div>
        );
    }
}

App.propTypes = {
    jobs: PropTypes.array.isRequired,
    incompleteCount: PropTypes.number.isRequired,
    currentUser: PropTypes.object,
};

export default createContainer(() => {
    return {
        jobs: Jobs.find({}, { sort: { createdAt: -1} }).fetch(),
        incompleteCount: Jobs.find({ checked: { $ne: true } }).count(),
        currentUser: Meteor.user(),
    };
}, App);