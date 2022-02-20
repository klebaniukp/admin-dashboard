import { Eventrix } from 'eventrix';
import { receiversList } from './receivers';
import { EventrixState } from '../interfaces/interfaces';

const initialState = {
    users: [],
};

export const store = new Eventrix<EventrixState>(initialState, receiversList);
