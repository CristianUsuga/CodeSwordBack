const express = require('express');
const router = express.Router();
const filterCategoriesController = require('../controllers/filterCategories.controller');
const middlewareLogin = require('../middlewares/middlewareLogin');

//Ruta para crear Categoria
router.post('/createCategory', middlewareLogin.middleLoginAdmin,filterCategoriesController.createCategory);

//Ruta para actualizar Categoria
router.put('/updateCategory', middlewareLogin.middleLoginAdmin, filterCategoriesController.updateCategory);

//Ruta para eliminar Categoria
router.delete('/deleteCategory', middlewareLogin.middleLoginAdmin, filterCategoriesController.deleteCategory);

//Ruta para traer una lista de todas las Categorias
router.get('/getCategories', middlewareLogin.middleLoginAdmin, filterCategoriesController.getCategories);

//Ruta para traer una Categoria
router.get('/getCategory/:id', middlewareLogin.middleLoginAdmin, filterCategoriesController.getCategory);

//Exportar rutas a la App
module.exports = router;