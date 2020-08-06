import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionController';


const router = express.Router();

const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController(); 

// Classes Routes
router.get('/classes', classesControllers.index);
router.post('/classes', classesControllers.create);

//Connections Routes
router.get('/connections', connectionsControllers.index);
router.post('/connections', connectionsControllers.create);


export default router;