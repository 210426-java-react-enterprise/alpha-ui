import {serverConnection} from "./server-connection";

export async function validate(user) {
    let response = await serverConnection.post('/users/validate',user);
    return await response.data;
}