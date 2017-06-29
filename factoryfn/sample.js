function factory(name, factoryF, enforce ){

	return provider(name, {
		
		$get: enforce !== false . ? enforceReturnValue(name, factoryFn): factoryFn;
	
	});

}


// using the $provide.factory()

// Simple version of provider when addition configuration is uncessary