import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/collections/TasksCollection';


const insertData = (text) => TasksCollection.insert({text: text});

Meteor.startup(() => {
	if(TasksCollection.find({}).count() === 0) {
		[
			"First Task",
			"Second Task",
			"Third Task",
			"Forth Task",
			"Fifth Task",
			"Sixth Task",
			"Seventh Task",
			"Eight Task"
		].forEach(insertData);

	} else {
		const count = TasksCollection.find({}).count();
		TasksCollection.insert({text: (count+1) + " Task"})
	}
});

function Person(firstName, lastName) {
	this.first = firstName;
	this.last = lastName;
}

Person.prototype.fullName = function() {
	return this.first + " " + this.last;
}

Person.prototype.fullNameReversed = function() {
	return this.last + " " + this.first;
}

const carla = new Person("Carla", "Carlos");

const carl = carla.fullName.bind(carla);
console.log(carl().toString());
