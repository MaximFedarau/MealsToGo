//Restaurant Interface
export interface Restaurant {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  rating: number;
  isOpenNow: boolean;
  isOpenTemporarily: boolean;
}
