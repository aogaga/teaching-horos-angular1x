(function(){

	var app = angular.module('app', ['ngRoute']);
	
	app.provider('books', ['constants', function(constants){
	
		this.$get = function(){
			
			var appName = constants.APP_TITLE;
			var appDesc = constants.APP_DESCRIPTION;
			
			var Version = constants.APP_VERSION;
			
			if(includeVersionInTitle){
				appName +=  ' ' +  Version;	
			}
	
			return {
				appName : appName,
				appDesc : appDesc	
			};
		};	
		
		var includeVersionInTitle  = false;
		
		this.setIncludeVersionInTitle = function(value){
			includeVersionInTitle = value;
		};
	
	}]);
	
	app.config(['booksProvider', 'constants', 'dataServiceProvider', '$routeProvider', function(booksProvider, constants, dataServiceProvider, $routeProvider){
		booksProvider.setIncludeVersionInTitle(true);
		console.log('title from constant service is ' + constants.APP_TITLE);
		console.log(dataServiceProvider.$get);
		
		$routeProvider
			.when('/', {
				templateUrl: '/templates/books.html',
				controller: 'BooksController',
				controllerAs: 'books'
			
			})
			.when('/AddBook', {
				templateUrl: '/templates/addBook.html',
				controller: 'AddBookController',
				controllerAs: 'addBook'
				
				
			});
		
		
		
		
		
	}]);
	
}());