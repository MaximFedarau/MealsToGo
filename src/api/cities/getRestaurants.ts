import { collection, doc, getDoc } from 'firebase/firestore/lite';
import camelize from 'camelize';

import { db } from 'api/init';

interface Restaurant {
  business_status: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  icon: string;
  name: string;
  opening_hours: {
    open_now: boolean;
  };
  photos: {
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;
  }[];
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
}

interface RestaurantsData {
  html_attributions: string[];
  next_page_token: string;
  results: Restaurant[];
}

export const getRestaurants = async (city: string) => {
  const citiesCol = collection(db, 'cities'); // collection reference
  const cityDoc = doc(citiesCol, city); // document reference
  const citySnap = await getDoc(cityDoc); // document snapshot
  const cityData = citySnap.data() as RestaurantsData;
  const filteredData = {
    ...cityData,
    results: cityData?.results.filter(
      restaurant => restaurant.business_status !== 'CLOSED_TEMPORARILY',
    ),
  }; // removing closed restaurants
  return camelize(filteredData);
};
