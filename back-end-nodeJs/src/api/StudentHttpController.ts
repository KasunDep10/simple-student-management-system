import express from "express";
import {datasource} from "../db/dbcp";

export const student=express.Router();

type Student= {
    "id":number | null,
    "name":string,
    "address":string
}
//
// student.get('/',async (req, res)=>{
//     const student=await datasource.query('SELECT * FROM student ');
//     res.json(student);
// });
//
// student.delete('/:id',async (req, res)=>{
//     const result=await datasource.query('DELETE FROM student WHERE id=?',[req.params.id])
//     res.sendStatus(result.affectedRows ? 204:404);
// });
//
// student.patch('/:id',async (req,res)=>{
//     const student=req.body as Student;
//     if (!student.name?.trim()){
//         res.sendStatus(400);
//         return;
//     }
//     const result = await datasource.query("UPDATE student SET name = ?, address=? WHERE id = ?",
//         [student.name,student.address, req.params.id]);
//     res.sendStatus(result.affectedRows ? 204 : 404);
//
// });
//
