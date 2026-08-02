import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params : {
        key : "a9169282cf2e438896d0aabb8195cd0d"
    }
})