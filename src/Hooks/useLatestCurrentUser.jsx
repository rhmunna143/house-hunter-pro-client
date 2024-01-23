import useCurrentUser from "./useCurrentUser";

const useLatestCurrentUser = () => {
    const users = useCurrentUser()
    const lastUser = users.length - 1;
    const latestUser = users[lastUser];

    return latestUser;
};

export default useLatestCurrentUser;