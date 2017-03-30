function estimatesCityFilter() {
	return function (items, city) {
		return items.filter(function(item){
  		return item.city == city
  	})
	};
}

angular
	.module('williams')
	.filter('estimatesCityFilter', estimatesCityFilter);
