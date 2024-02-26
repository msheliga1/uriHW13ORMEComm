const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint - MJS Works
router.get('/', async (req, res) => {
  // find all categories, be sure to include its associated Products
  // Category hasMany products
  const catData = await Category.findAll({
    include: Product
  }).catch((err) => {
    res.status(500).json(err);
  });
  if (!catData) {
    res.status(404).json("No Categories found!");
    return;
  }
  res.status(200).json(catData);
});

// /api/categories/id endpoint - Works MJS
// find one category by its `id` value, include its associated Products
router.get('/:id', async (req, res) => {
  const catData = await Category.findByPk(req.params.id, {
    include: Product
  }).catch((err) => {
    res.status(500).json(err);
  });
  if (!catData) {
    res.status(404).json("Category not found!");
    return;
  }  
  res.status(200).json(catData);
}); 

// api/categories POST endpoint - Works MJS (returns created object including id)
router.post('/', async (req, res) => {
  // create a new category
  const catData = await Category.create({
    category_name: req.body.category_name
  }).catch((err) => {
    res.status(500).json(err); 
  });
  res.status(202).json(catData);
});

// api/categories/id PUT endpoint - MJS Works (returns record affected - aka 1)
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  console.log("Starting api/categories/put");
  const catData = await Category.update( {
    id: req.params.id, 
    category_name: req.body.category_name,
  }, 
  { 
    where: {
      id: req.params.id,
    },    
  }).catch((err) => {
    res.status(500).json(err); 
  });
  res.status(200).json(catData);
});

// delete a category by its `id` value. - Works MJS 2.26 
router.delete('/:id', async (req, res) => {
  const catData = await Category.destroy({ 
    where: {
      id: req.params.id,
    },    
  }).catch((err) => { 
    res.status(500).json(err);   
  }); 
  if (!catData) {
    res.status(404).json("Category does not exist!");
    return;  // (else server crash - cannot set headers afer they are sent to the clinet)
  }
  res.status(200).json(catData);
});

module.exports = router;
