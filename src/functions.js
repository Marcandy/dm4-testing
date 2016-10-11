function returnOne() {
	return 1;
}

function flatten( arr ) {
	return arr.reduce( ( pv, cr ) => {
		return pv.concat( Array.isArray( cr ) ? flatten( cr ) : cr );
	}, [] );
}
