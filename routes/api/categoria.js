/* import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const categoriaController = require('../../controllers/CategoriaController');
const auth = require('../../middlewares/auth');


const router = routerx();

router.post('/add', auth.verifyUsuario,categoriaController.add);//auth.verifyUsuario,
router.get('/list', auth.verifyUsuario,categoriaController.list);//auth.verifyUsuario,
router.put('/update', auth.verifyUsuario,categoriaController.update);//auth.verifyUsuario,
router.put('/activate', auth.verifyUsuario,categoriaController.activate);//auth.verifyUsuario,
router.put('/deactivate',auth.verifyUsuario, categoriaController.deactivate);//auth.verifyUsuario,



module.exports = router;