/* import routerx from 'express-promise-router';
import articuloController from '../controllers/ArticuloController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const articuloController = require('../../controllers/ArticuloController');
const auth = require('../../middlewares/auth');

const router = routerx();

router.get('/list', articuloController.list);
router.post('/add', auth.verifyUsuario, articuloController.add);//auth.verifyUsuario,
router.put('/update', auth.verifyUsuario, articuloController.update);//auth.verifyUsuario,
router.put('/activate', auth.verifyUsuario, articuloController.activate);//auth.verifyUsuario,
router.put('/deactivate',auth.verifyUsuario,  articuloController.deactivate);//auth.verifyUsuario,

module.exports = router;