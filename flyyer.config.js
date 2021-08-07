// Created with create-flyyer-app@2.1.1
const {config} = require('@flyyer/types');
require('dotenv').config();

module.exports = config({
  engine: 'react-typescript',
  key: process.env.FLYYER_KEY,
  deck: 'ucalendar',
  name: 'UCalendar',
  description: 'ucalendar schedule image generator ✨',
  private: true,
  sizes: ['THUMBNAIL', 'BANNER', 'SQUARE']
});
