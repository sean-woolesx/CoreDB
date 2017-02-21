import * as ActionTypes from '../constants/ActionTypes';

export function createClient(name) {
    return {
        type: ActionTypes.CREATE_CLIENT,
        payload: {
            name: name
        }
    }
}

export function createClientFulfilled(data) {
    return {
        type: ActionTypes.CREATE_CLIENT_FULFILLED,
        payload: data
    };
}

export function createClientRejected(error) {
    return {
        type: ActionTypes.CREATE_CLIENT_REJECTED,
        payload: error
    };
}

export function createUser(userName, password, role, clientName, clientSecret) {
    return {
        type: ActionTypes.CREATE_USER,
        payload: {
            userName: userName,
            password: password,
            clientName: clientName,
            clientSecret: clientSecret,
            role: role
        }
    }
}

export function createUserFulfilled(data) {
    return {
        type: ActionTypes.CREATE_USER_FULFILLED,
        payload: data
    };
}

export function createUserRejected(error) {
    return {
        type: ActionTypes.CREATE_USER_REJECTED,
        payload: error
    };
}