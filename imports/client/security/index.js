security = {
	 keyCode: 27, //escape
	//keyCode: 192, //tilde

	// This function must return true for Meteor Candy to run in production
	permission: function (userDoc) {
		return false; 
	}
}

export { security }
