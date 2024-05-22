export interface DestinationItem {
    id: number;
    imageUrl: string;
    city: string;
    places: string;
  }

 export interface SliderItem {
    id: number;
    imageUrl: string;
    city: string;
    place: string;
    availableDate: string;
  }

  export interface Hostel {
    id: string;
    name: string;
}

export interface FamousPointsItem {
    id: number;
    imageUrl:string;
    pointName:string;
    description:string;
}