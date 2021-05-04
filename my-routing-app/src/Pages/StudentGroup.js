import React from 'react'
import { Student } from './Student'

export const StudentGroup = ({listofStudents}) => {
    return(
    <>
    {listofStudents.map(student => <Student student = {student} key={student.name}/> )}
        </>
    )

}