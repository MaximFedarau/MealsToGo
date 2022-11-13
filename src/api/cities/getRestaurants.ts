import { collection, doc, getDoc } from 'firebase/firestore/lite';
import camelize from 'camelize';

import { db } from 'api/init';
import { Restaurant } from 'types/restaurants';

interface RestaurantsData {
  html_attributions: string[];
  next_page_token: string;
  results: Restaurant[];
}

export const getRestaurants = async (city: string) => {
  const citiesCol = collection(db, 'cities'); // collection reference
  const cityDoc = doc(citiesCol, city); // document reference
  const citySnap = await getDoc(cityDoc); // document snapshot
  const cityData = citySnap.data() as RestaurantsData | undefined;
  const filteredData = {
    ...cityData,
    results: cityData?.results.filter(
      restaurant => restaurant.businessStatus !== 'CLOSED_TEMPORARILY',
    ),
  }; // removing closed restaurants
  return camelize(filteredData);
};
