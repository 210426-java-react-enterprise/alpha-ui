import {serverConnection} from "./server-connection";

export async function register(user) {
    let response = await serverConnection.post('/users/register',user);
    return await response.data;
}