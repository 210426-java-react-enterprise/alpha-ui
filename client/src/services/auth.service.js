import {alphacastAuthenticatedClient} from "../utilities/alphacastClients";

class AuthService {

    login(username, password){
        return alphacastAuthenticatedClient.post("auth/signin",
            {
            username,
            password
        }).then(response => {
            if(response.data.accessToken){
                localStorage.setItem("user",JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout(){
        localStorage.removeItem("user");
    }

    register(username,password,email){
        return alphacastAuthenticatedClient.post("register", {
            username,
            password,
            email
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();