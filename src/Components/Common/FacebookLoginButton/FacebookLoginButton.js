import React, { useEffect, useState } from "react"

import { useDispatch } from "react-redux";
import { loginAction } from "src/store/actions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "reactstrap"
import { facebook } from "src/config";



const FacebookLoginButton = (props) => {
	const dispatch = useDispatch();

	const history = useHistory();

	const onLoginClick = () => {
		window.FB.login(function (response) {
			// handle the response
			if (response.status === "connected") {
				localStorage.setItem('authResponse', JSON.stringify(response.authResponse))
				dispatch(loginAction({
					email: '',
					accessToken: response.authResponse.accessToken,
					facebookUserId: response.authResponse.userID,
					signinRequest: response.authResponse.accessToken,
					scopes: facebook.scopes,
					expiredTime: response.authResponse.data_access_expiration_time
				}, history));
			}
		}, { scope: facebook.scopes });
	};



	return (
		<div><Button onClick={onLoginClick}>Login with Facebook</Button></div>
	);
}

export default FacebookLoginButton
