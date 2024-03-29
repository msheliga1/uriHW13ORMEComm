const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// find all products, include associated Category and Tag data 
// MJS 2.26.24 - Works except for Tags which returns an empty array,
// maybe need ProductTag??
router.get('/', async (req, res) => {  // NOT asyncH - no H
  const proData = await Product.findAll({
    include: [{ model: Category }, {model: Tag}], 
  }).catch((err) => {
    res.status(500).json(err);
  });
  res.status(200).json(proData);
}); // end /api/products - get all products

  // find a single product by its `id`, be sure to include its associated Category and Tag data
  router.get('/:id', async (req, res) => {
    const proData = await Product.findByPk(req.params.id, {
      include: [{ model: Tag }, {model: Category}], 
    }).catch((err) => {
      res.status(500).json(err);
    });
    if (!proData) {
      res.status(404).json("Product not found!");
      return;  // else server crash when trying to overwrite res below.
    }
    res.status(200).json(proData);
  });

// create new product
router.post('/', (req, res) => {
  /* req.body should look like this...
    { product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4] }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {

        ProductTag.findAll({
          where: { product_id: req.params.id }
        }).then((productTags) => {
          // create filtered list of new tag_ids
          const productTagIds = productTags.map(({ tag_id }) => tag_id);
          const newProductTags = req.body.tagIds
            .filter((tag_id) => !productTagIds.includes(tag_id))
            .map((tag_id) => {
              return {
                product_id: req.params.id,
                tag_id,
              };
            });

          // figure out which ones to remove
          const productTagsToRemove = productTags
            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
            .map(({ id }) => id);
          // run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(product);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

// api/products/id - delete product by its `id` value - Works MJS 2.26
router.delete('/:id', async (req, res) => {
  const proData = await Product.destroy({
    where: {
      id: req.params.id,
    }, 
  }).catch((err) => {
    res.status(500).json(err); 
  }); 
  if (!proData) {
    res.status(404).json("Product not found!");
    return;  // else server crash when trying to overwrite res below.
  }
  res.status(200).json(proData); 
});  // delete one product by its `id` value

module.exports = router;
