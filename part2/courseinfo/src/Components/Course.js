import React from 'react';

const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
}

const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    );
  };

const Total = ({ course }) => {
    //array of the number of exercises in each part
    const exercises = course.parts.map((part) => part.exercises)
    //reduce this array to get total
    const total = exercises.reduce((prev, current) => prev + current);

    return(
      <strong>Total of {total} exercises</strong>
    ) 
  }
  
const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((part) => <Part key={part.id} part={part} /> )}
      </div>
    )
}

const Course = ({courses}) => {

    return(
    courses.map((course) => 
    <div> 
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
    ))
}

export default Course;