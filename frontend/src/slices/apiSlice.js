import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

// Update the baseUrl to point to your server
const baseQuery = fetchBaseQuery({ 
  baseUrl: 'http://localhost:5001', // Update to match your actual server port (5001)
  credentials: 'include' // Important for handling cookies/authentication
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});