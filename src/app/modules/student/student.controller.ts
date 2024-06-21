import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const {student: studentData} = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async(req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: "All student retrieve successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

const getSingleStudent = async(req: Request, res: Response) => {
    try {
        const id = req.params.studentId;
        const result = await StudentServices.getSingleStudentById(id)
        res.status(200).json({
            success: true,
            message: "Single student retrieve successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
} 

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent
};
