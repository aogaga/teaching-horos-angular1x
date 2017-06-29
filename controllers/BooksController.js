(function(){
	angular.module('app')
	.controller('BooksController', ['books', 'dataService', 'logger', 'badgeService', BooksController]);
	
	function BooksController(books, dataService, logger, badgeService) {
		
		var vm = this; 
		vm.appName = books.appName;
		
		vm.getBadge = badgeService.retrieveBadge;
		logger.output('Books Controller has been created');
		
		dataService.getAllBooks()
			.then(getBooksSuccess, null, getBooksNotification)
			.catch(errorCallback);
			
		function getBooksSuccess(books){
			vm.allBooks = books;
		}
		
		
		function errorCallback(errorMsg) {
			console.log(errorMsg);
		}
			
		function getBooksNotification(){
			console.log('Promise Notification was sent ');	
		}
		
		
		
		dataService.getAllReaders()
			.then(getReadersSuccess)
			.catch(errorsCallback)
			.finally(getAllReadersComplete);
			
			
		function getReadersSuccess(readers) {
			vm.allReaders = readers;
		}
		
		function getAllReadersComplete(){
			
			console.log('get all readers has completed');	
		}
			
		
		
	}
	
	
	
}());