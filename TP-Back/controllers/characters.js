const axios = require('axios');
const { response } = require("express");

const getCharacters = async (req, res = response) => {
  try {
    const resp = await axios.get(process.env.CHARACTERS)
    res.status(200).json(resp.data)
  } catch (error) {
    res.status(400).json(resp.data)
  }
}

module.exports = {
  getCharacters
}