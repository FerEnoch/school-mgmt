const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    const students = await getAllStudents();
    res.status(200).json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    const student = await addNewStudent(req.body);
    res.status(201).json({ student });
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
    const updatedStudent = await updateStudent(req.body);
    res.status(200).json({ updatedStudent });
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    const student = await getStudentDetail(req.params.id);
    res.status(200).json({ student });
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code
    const updatedStudentStatus = await setStudentStatus(req.body);
    res.status(200).json({ updatedStudentStatus });

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
