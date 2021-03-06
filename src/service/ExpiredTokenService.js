import jwtDecode from "jwt-decode";
import AuthService from "./AuthService";

export default function ExpiredTokenService() {
    if (JSON.parse(localStorage.getItem("company"))) {
        let token = JSON.parse(localStorage.getItem("company")).token;
        if (token) {
            let decodedToken = jwtDecode(token);
            console.log("Decoded Token", decodedToken);
            let currentDate = new Date();

            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                console.log("Token expired.");
                AuthService.logout();
            } else {
                console.log("Valid token");
            }
        }
    }
}