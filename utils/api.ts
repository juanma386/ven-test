// utils/api.ts
import { CountResponse, InteractionsByTypeResponse, TopUserResponse } from '../interfaces'; // Ajusta la ruta según sea necesario
import { getEndpointUrl } from './environment';

const endpointUrl = getEndpointUrl();

export const getContactsCount = async (period?: string): Promise<CountResponse> => {
  const url = period ? `${endpointUrl}/contacts/count?period=${period}` : `${endpointUrl}/contacts/count`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json() as Promise<CountResponse>;
};

export const getCompaniesCount = async (): Promise<CountResponse> => {
  const url = `${endpointUrl}/companies/count`; // Asegúrate de que este endpoint exista en tu API
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json() as Promise<CountResponse>;
};

export const getInteractionsByType = async (): Promise<InteractionsByTypeResponse> => {
  const url = `${endpointUrl}/interactions/byType`; // Asegúrate de que este endpoint exista en tu API
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json() as Promise<InteractionsByTypeResponse>;
};

export const getTopUsers = async (limit: number = 5): Promise<TopUserResponse[]> => {
  const url = `${endpointUrl}/users/top?limit=${limit}`; // Asegúrate de que este endpoint exista en tu API
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json() as Promise<TopUserResponse[]>;
};