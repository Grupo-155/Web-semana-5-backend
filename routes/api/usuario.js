/* import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const usuarioController = require('../../controllers/UsuarioController');
const auth = require('../../middlewares/auth');

const router = routerx();

router.post('/add',auth.verifyUsuario, usuarioController.add);//auth.verifyUsuario,
router.get('/list',auth.verifyUsuario, usuarioController.list);//auth.verifyUsuario,
router.put('/update', auth.verifyUsuario,usuarioController.update);//auth.verifyUsuario,
router.put('/activate',auth.verifyUsuario, usuarioController.activate);//auth.verifyUsuario,
router.put('/deactivate', auth.verifyUsuario,usuarioController.deactivate);//auth.verifyUsuario,
router.post('/login', usuarioController.login);

module.exports = router;