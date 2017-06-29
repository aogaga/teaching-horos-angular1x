(function(){
	angular.module('app')
		.factory('dataService', ['$q', '$timeout', 'logger', dataService]);
		
		
	function dataService($q, $timeout, logger){
		
		return{
			getAllBooks : getAllBooks,
			getAllReaders : getAllReaders	
			
		};
		
		
		function getAllBooks(){
		//	logger.output('getting all books');
			
			
			var booksArray = [
				
				{
					book_id : 1, 
					title : 'Harry Potter and the Deathly Hallows',
					author: 'J.K Rowlings',
					year_published: 2000	
					
				},
				{
					book_id : 2, 
					title : 'The Cat in the Hat',
					author: 'Dr. Seuss',
					year_published: 1957	
					
				},
				{
					book_id : 3, 
					title : 'Encyclopedia Brown, Boy Detective',
					author: 'Donald J. Sobol',
					year_published: 1963
					
				}
				
			];
			var deferred = $q.defer();
			
			$timeout(function(){
			var successful = true;
			
			if(successful){
				deferred.notify('Just getting started, gathering books....');
				deferred.notify('almost done gathering books....');
				deferred.resolve(booksArray);
			}else{
				deferred.reject('Error retrieving books.');
			}
			
			}, 5000);
			
			return deferred.promise;
		}
		
		
		function getAllReaders(){
		//	logger.output('getting all services');
			var readersArray =  [
				{
					reader_id : 1,
					name : 'Maries',
					weeklyReadingGoal : 315,
					totalMinutesRead: 8000	
					
				},
				{
					reader_id : 2,
					name : 'Daniel',
					weeklyReadingGoal : 210,
					totalMinutesRead : 3000	
					
				},
				{
					reader_id : 3,
					name : 'Lanier',
					weeklyReadingGoal : 140,
					totalMinutesRead : 600	
					
				}
				
				
			];
			var deferred = $q.defer();
			
			$timeout(function(){
			
				deferred.resolve(readersArray);
			}, 1500);
			
			return deferred.promise;
		}
	}
	
	dataService.$inject = ['logger'];
	
}());