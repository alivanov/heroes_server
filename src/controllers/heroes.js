const Heroes = require('../models/hero');

const getHero = async (req, res) => {
  try {
    const hero = await Heroes.findById(req.params.id).exec();
    return res.status(200).json(hero);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getHeroes = async (req, res) => {
  const search = { name: { $regex: new RegExp(req.query.name, 'i') } };
  try {
    const heroes = await Heroes.find(search).exec();
    return res.status(200).json(heroes);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const createHero = async (req, res) => {
  try {
    const hero = new Heroes(req.body);
    const created = await hero.save();
    return res.status(200).json(created);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const updateHero = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const edited = await Heroes.findByIdAndUpdate(id, { name }, { new: true });
    return res.status(200).json(edited);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const deleteHero = async (req, res) => {
  try {
    await Heroes.findByIdAndRemove(req.params.id);
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {
  getHero,
  getHeroes,
  createHero,
  deleteHero,
  updateHero,
};
