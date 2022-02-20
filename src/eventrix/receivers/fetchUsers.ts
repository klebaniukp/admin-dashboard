import { EventsReceiver } from 'eventrix';

export const fetchUsersReceiver = new EventsReceiver(
    'Users:fetch',
    (eventName, eventData, stateManager) => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;

            console.log(apiUrl);
            
        } catch (error) {
            console.log(error);
        }
    },
);
