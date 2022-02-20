import { AxiosService } from './AxiosService';
import { User } from '../interfaces/interfaces';

export class UsersService {
    axiosService: AxiosService;
    constructor(axiosService: AxiosService) {
        this.axiosService = axiosService;
    }
    getUsers(): Promise<User[]> {
        const apiUrl = process.env.REACT_APP_API_URL as string;

        return Promise.all([this.fetchUsers(apiUrl)]).then(res => {
            return [...res];
        });
    }
    fetchUsers(url: string) {
        return this.axiosService.get(url).then(res => {
            return res.data;
        });
    }
}
