import axios, { AxiosError } from 'axios';
interface QueryData {
  query: string;
}
interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}
const fetchPensionDetails = async (data: QueryData):
 Promise<ApiResponse | null> => {
  try {
    const response = await axios.post<ApiResponse>(
      'https://your-backend-api.com/endpoint',
      data,
      {headers: {'Content-Type': 'application/json'}}
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        console.error('Server Error:', axiosError.response.data);
      } else if (axiosError.request) {
        console.error('Network Error:', axiosError.message);
      } else {
        console.error('Unexpected Error:', axiosError.message);
      }
    } else {
      console.error('Unknown Error:', error);
    }
    return null;
  }
};
export default fetchPensionDetails;