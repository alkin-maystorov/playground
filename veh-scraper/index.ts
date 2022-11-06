import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';

import { CarData } from './types';

const app = express();

const ALL_CARS_URL = 'https://www.vehiculum.de/leasing?customer_group=b2b';

async function getCarsData(url: string) {
  const carsData: CarData[] = [];

  try {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);
    const cars = $('.card__content');
    const nextPage = $('a span');

    cars.each(function (i, el) {
      const title = $(el).find('.card__title').text();
      const subTitle = $(el).find('.card__subtitle').text();
      const montlyRate = $(el).find('.price-group__value').text();
      const rating = $(el).find('.price-rating__value').text();

      carsData.push({ title, subTitle, montlyRate, rating });
    });
    console.log(nextPage);
  } catch (err) {
    console.error(err);
  }
}

getCarsData(ALL_CARS_URL);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(8000, () => console.log('Server started'));
