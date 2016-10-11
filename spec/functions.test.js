describe( "returnOne", () => {
	it( "returns the number 1", () => {
		expect( returnOne() ).to.equal( 1 );
		expect( returnOne() ).to.not.equal( "1" );
	} );
} );

describe( "flatten", () => {
	it( "flattens multidimensional arrays", () => {
		expect( flatten( [ 1, 2, [ 3, 4, 5, 6 ] ] ) )
			.to.eql( [ 1, 2, 3, 4, 5, 6 ] );
		expect( flatten( [ [ "a" ] ] ) ).to.eql( [ "a" ] );
		expect( flatten( [ "a", 2, [ false, undefined ] ] ) )
			.to.eql( [ "a", 2, false, undefined ] );
	} );
} );
