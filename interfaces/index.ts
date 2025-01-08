// interfaces/index.ts
//
// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};



export interface CountResponse {
  count: number;
}

export interface InteractionsByTypeResponse {
  [type: string]: number;
}

export interface TopUserResponse {
  user_id: string;
  count: number;
}

export interface Metrics {
  totalContacts?: number;
  newContacts?: number;
  totalCompanies?: number;
  interactionsByType?: InteractionsByTypeResponse;
  topUsers?: TopUserResponse[];
}