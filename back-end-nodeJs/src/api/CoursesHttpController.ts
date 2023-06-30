import express from "express";
import {datasource} from "../db/dbcp";

export const router=express.Router();

type Course= {
    "id":string,
    "description":string,
    "duration":number
}

router.get('/',async (req, res)=>{
    const course=await datasource.query('SELECT * FROM course ');
    res.json(course);
});

router.delete('/:id',async (req, res)=>{
    const result=await datasource.query('DELETE FROM course WHERE id=?',[req.params.id])
    res.sendStatus(result.affectedRows ? 204:404);
});

router.patch('/:id',async (req, res)=>{
    const course=req.body as Course;
    if (!course.description?.trim()){
        res.sendStatus(400);
        return;
    }
    const result = await datasource.query("UPDATE course SET description = ?, duration =? WHERE id = ?",
        [course.description,course.duration, req.params.id]);
    res.sendStatus(result.affectedRows ? 204 : 404);
});
