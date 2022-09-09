import * as apiClient from 'services/api_client';

export const createAppointment = apiClient.postAppointment;
export const createEstimate = apiClient.postEstimate;
export const { getAppointments } = apiClient;
