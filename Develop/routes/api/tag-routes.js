const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {  // NOT asyncH - no H
  // find all tags, be sure to include its associated Product data
  const tagData = await Tag.findAll({
    include: [{ model: Product }], 
  }).catch((err) => {
    res.status(500).json(err);
  });
  res.status(200).json(tagData);
  // res.send("<h1>MJS G
});

  // find a single tag by its `id`, be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  const tagData = await Tag.findByPk(req.params.id, {
    include: [{ model: Product }], 
  }).catch((err) => {
    res.status(500).json(err);
  });
  if (!tagData) {
    res.status(404).json("Tag not found!");
    return;  // else server crash when trying to overwrite res below.
  }
  res.status(200).json(tagData);
});

// create a new tag. Works MJS 2.26
router.post('/', async (req, res) => {
  const tagData = await Tag.create({
    tag_name: req.body.tag_name
  }).catch((err) => { 
    res.status(500).json(err);
  });
  res.status(202).json(tagData);
});

// update a tag's name by its `id` value - Do NOT include associated product data
router.put('/:id', async (req, res) => {
  const tagData = await Tag.update({
    id: req.params.id,
    tag_name: req.body.tag_name,
  }, 
  {
    where: {
      id: req.params.id, 
    }, 
  }).catch((err) => {
    res.status(500).json(err);
  });
  res.status(200).json(tagData); 
});

// Delete tag by its `id` value
// Not allowed if foreign key tag-product exists, such as for id=5
router.delete('/:id', async (req, res) => {
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    }, 
  }).catch((err) => {
    res.status(500).json(err); 
  }); 
  if (!tagData) {
    res.status(404).json("Tag not found!");
    return;  // else server crash when trying to overwrite res below.
  }
  res.status(200).json(tagData); 
});

module.exports = router;
