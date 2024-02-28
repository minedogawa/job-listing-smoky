import { Navigate } from "react-router-dom"

export default function RequireAuth({ children }) {
	const isLoggedIn = window.localStorage.getItem("isLoggedIn")

	return isLoggedIn ? children : <Navigate to="/authentication/login" />
}

// function app(){
// 	const isLoggedIn = window.localStorage.getItem("isLoggedIn");
// 	const [isAllowed, setIsAllowed] = useState(true);

// 	useEffect(() => {
//         if (isLoggedIn) {
//             setIsAllowed(true);
//         }
// 		else {
//             setIsAllowed(false);
//         }
//     });

// 	const intervalId = window.localStorage.getItem(() => {
// 		const newIsLoggedIn = window.localStorage.getItem("isLogged");

// 		if (newIsLoggedIn) {
//             setIsAllowed(true);
//         } else {
//             setIsAllowed(false);
//         }
// 	}, 1000);

// 	return () => { clearInterval(intervalId); }
// }