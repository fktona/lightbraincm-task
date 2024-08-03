interface DistanceToCampus {
    car: string;
    walking: string;
    public_transport: string;
  }
  
 export  interface Hostel {
    id: number;
    name: string;
    img_url: string;
    featured:boolean
    distance_to_campus: DistanceToCampus;
    description: string;
    facilities: string[];
    type: string;
    price: number;
    ratings: number;
    last_cheap: string;
  }

  export interface Filter  extends Hostel{
    filter: any;
    sort(arg0: (a: any, b: any) => number): unknown;
  }