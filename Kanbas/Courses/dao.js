import model from "./model.js";
export const createCourse = (course) => {
    delete course.id
    return model.create(course);
}
export const findAllCourses = () => model.find();
export const findCoursesById = (courseId) => model.findById(courseId);
export const updateCourse = (courseId, name) => model.updateOne({ _id: courseId }, { $set: name });
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });