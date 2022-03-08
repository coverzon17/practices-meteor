import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
// import Task from './Task.jsx';
import TaskForm from './TaskForm.jsx';
import Search from './Search.jsx';
import MyComponent from './contents/MyComponent.jsx';
import { TasksCollection } from '/imports/api/collections/TasksCollection';
import TemperatureCalculator from './utils/calculator/TemperatureCalculator.jsx';
import withLog from './utils/hocs/withLog.jsx';
import products from '../data/raw/products.js';

import FilteredProductList from './store/search-bar/FilteredProductList.jsx';
const TemperatureCalculatorWithLog = withLog(TemperatureCalculator, () => console.log("huh"));


export const App = () => {
  // const tasks = useTracker(() => TasksCollection.find({}).fetch());

  // return (
  //   <div>
  //     <div>
  //       <TaskForm />
  //       <hr/>
  //     </div>
  //     <h1>My Tasks</h1>
  //     <ul>
  //       {tasks.map( (task) => <Task key={task._id} task={task} />)}
  //     </ul>
  //   </div>
  // );

  return (
    <div>
      {/*<Search />
      <MyComponent />*/}
      {/*<TemperatureCalculatorWithLog />*/}
      <FilteredProductList />
    </div>
  );
};

