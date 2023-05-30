import { useEffect } from "react";

const isAuthenticated = () => {
    useEffect(() => {
        const fetchRole = () => {
            try {
                fetch("/api/dashboard")
                    .then((res) => res.json())
                    .then((data) => {
                        return data.user.roles[0];
                    });
            } catch (error) {
                console.log(error);
            }
        };
        fetchRole();
    }, []);
};

export default isAuthenticated;

// useEffect(() => {
//     if (isSubmited) {
//         const fetchRole = () => {
//             try {
//                 fetch("/api/dashboard")
//                     .then((res) => res.json())
//                     .then((data) => {
//                         setUserContext(data.user.roles[0]);
//                     });
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchRole();
//     }
// }, [isSubmited]);
