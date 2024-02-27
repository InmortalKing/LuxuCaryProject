import  { Router } from "express";

const router = Router();

router.get('/', (req,res)=> res.render("app"));
router.get('*', (req,res)=> res.send("Error 404 Page")); 

export default router;