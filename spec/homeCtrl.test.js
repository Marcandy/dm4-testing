describe( "homeCtrl", () => {
	let $controller;

	beforeEach( module( "ngTests" ) );

	beforeEach( inject( function( _$controller_ ) {
		$controller = _$controller_;
	} ) );

	describe( "setUser", () => {
		it( "puts a user on $scope", () => {
			const homeCtrl = $controller( "homeCtrl", { $scope: {} } );

			expect( homeCtrl.scope.user ).to.equal( undefined );

			homeCtrl.scope.setUser( "John Doe" );

			expect( homeCtrl.scope.user ).to.equal( "John Doe" );
		} );
	} );
} );
