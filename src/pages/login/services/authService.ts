import request from '../../../services/request';

type Response = {
  token: string;
};

type CallBackFunc = (isAuthenticated: boolean) => void;

export type Credentials = {
  username: string;
  password: string;
};

const authService = {
  login: async (credentials: Credentials, cb: CallBackFunc) => {
    try {
      const response: Response = await request.POST('/v1/tokens', credentials);
      localStorage.setItem('token', response.token);
      cb(true);
    } catch (err) {
      throw err;
    }
  },
  logout: (cb: CallBackFunc) => {
    localStorage.removeItem('token');
    cb(false);
  },
};

export default authService;
