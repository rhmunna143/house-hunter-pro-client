import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "./util";

const useUsers = () => {
    const [users, setAllUsers] = useState([])

    useEffect(() => {
        axios.get(`${baseUrl}/users`)
            .then(res => {
                setAllUsers(res.data)
            })

            .catch(err => {
                console.log(err);
            })
    }, [])

    return users;
};

export default useUsers;