angular.module( "ngTests" )
.service( "userService", function( $http ) {
	this.getUsers = () => {
		return $http.get( "/api/users" );
	}
} );
