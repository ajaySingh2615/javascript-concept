const course = {
  course_name: "js in hindi",
  price: 999,
  courseInstructor: "Hitesh",
};

// console.log(course.course_name);

const { courseInstructor: instructor } = course;

console.log(instructor);
