describe( "userService", () => {
	let userService;
	let $httpBackend;

	beforeEach( module( "ngTests" ) );

	beforeEach( inject( function( _userService_, _$httpBackend_ ) {
		userService = _userService_;
		$httpBackend = _$httpBackend_;
	} ) );

	afterEach( () => {
		$httpBackend.verifyNoOutstandingRequest();
		$httpBackend.verifyNoOutstandingExpectation();
	} );

	describe( "getUsers", () => {
		it( "makes a GET request to /api/users", () => {
			$httpBackend.expectGET( "/api/users" )
				.respond( 200, [ "Taryn", "Dontavious", "Joe" ] );

			userService.getUsers()

			$httpBackend.flush();
		} );

	} );
} );
