import React from "react"

//import Scss
import "./assets/scss/themes.scss"

//imoprt Route
import Route from "./Routes"


// Fake Backend
import AlertDialog from "./Components/Common/AlertDialog/AlertDialog"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react"
import { facebook } from "src/config";

// Activating fake backend
function App() {
	const facebookAppId = facebook.APP_ID;
	console.log(facebookAppId)
	useEffect(() => {
		window.fbAsyncInit = () => {
			window.FB.init({
				appId: facebookAppId,
				autoLogAppEvents: true,
				xfbml: true,
				version: 'v11.0'
			});
		};
		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) { return; }
			js = d.createElement(s); js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}, []);
	return (
		<React.Fragment>
			<Route />
			<AlertDialog />
			<ToastContainer></ToastContainer>
		</React.Fragment>
	)
}

export default App
