export interface ImageData {
    id: string;
    uri: string;
  }
  
 export interface Hostel {
    name: string;
    address: string;
    dormPrice: string;
    privateRoomPrice: string;
    images: ImageData[];
  }

  export interface FamousPointsItem {
    id: number;
    imageUrl:string;
    pointName:string;
    description:string;
}

export interface LocalExperiencesItem {
  id: number;
  imageUrl:string;
  tourName:string;
  description:string;
}