import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from './util';

const useCurrentUser = () => {
    const [users, setAllUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)

        axios.get(`${baseUrl}/users/current-user`)
            .then(res => {
                setAllUsers(res.data)

                setIsLoading(false)
            })

            .catch(err => {
                console.log(err);
            })
    }, [])

    console.log(users);

    return {users, isLoading};
};

export default useCurrentUser;