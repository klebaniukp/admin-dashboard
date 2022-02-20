import React from 'react';
import axios from 'axios';
import { AxiosService } from './services/AxiosService';
import { UsersService } from './services/UsersService';

function App() {
    // fetch(
    //     'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data',
    // )
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res);
    //     });

    const usersService = new UsersService(new AxiosService(axios));
    usersService.getUsers().then(res => console.log(res));

    return (
        <div className='App'>
            <div>App</div>
        </div>
    );
}

export default App;
