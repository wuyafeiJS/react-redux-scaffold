import request from '../utils/request';

export async function query({ page = 1 }) {
  return request(`/users?_page=${page}&limit=5`);
}
