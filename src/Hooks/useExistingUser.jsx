import useUsers from "./useUsers";

const useExistingUser = (email) => {
    const users = useUsers();

    const isExist = users.find(user => email === user.email);

    if (isExist && isExist.length > 0) {
        return true;
    }
};

export default useExistingUser;