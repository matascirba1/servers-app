import request from '../../../services/request';

export type Server = {
  name: string;
  distance: number;
};

export type Response = Server[];

export default async function getServers() {
  try {
    const token = localStorage.getItem('token');

    if (!token) throw Error('Token is not defined');

    return await request.GET('/v1/servers', {
      Authorization: token,
    });
  } catch (err) {
    throw err;
  }
}
