/**
 * Created by ddeisadze on 9/24/16.
 */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import { Student } from './student.js';

if (Meteor.isServer) {
    describe('Tasks', () => {
        describe('methods', () => {
            const userId = Random.id();
            let taskId;

            beforeEach(() => {
                Tasks.remove({});
                taskId = Tasks.insert({
                    text: 'test task',
                    createdAt: new Date(),
                    owner: userId,
                    username: 'tmeasday',
                });
            });

            it('can delete owned task', () => {
            });
        });

    });
}