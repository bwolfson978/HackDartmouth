/**
 * Created by Barrett on 9/24/2016.
 */
import React, { Component, PropTypes } from 'react';
import { Jobs } from '../api/jobs.js';
// Job component - represents a single job object
export default class Job extends Component {
    toggleChecked() {
        // Set the checked property to the opposite of its current value
        Jobs.update(this.props.job._id, {
            $set: { checked: !this.props.job.checked },
        });
    }

    deleteThisJob() {
        Jobs.remove(this.props.job._id);
    }

    render() {
        // Give jobs a different className when they are checked off,
        // so that we can style them nicely in CSS
        const jobClassName = this.props.job.checked ? 'checked' : '';

        return (
            <li className={jobClassName}>
                <button className="delete" onClick={this.deleteThisJob.bind(this)}>
                    &times;
                </button>

                <input
                    type="checkbox"
                    readOnly
                    checked={this.props.job.checked}
                    onClick={this.toggleChecked.bind(this)}
                />

                <span className="text">
                    <strong>{this.props.job.createdAt}: {this.props.job.category}</strong>
                </span>

            </li>
        );
    }
}

Job.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    job: PropTypes.object.isRequired,
};