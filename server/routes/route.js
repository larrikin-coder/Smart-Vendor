import express from  'express';
import { userSignUp } from '../controller/user-controller.js';


const router = express.Router();

//login & signup
router.post('/signup', userSignUp);


export default router;