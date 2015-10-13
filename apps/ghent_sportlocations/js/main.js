(function() {
	var App = {
		"init" : function() {
			// Cache the url with Sportlocations in URLDSGHENTSPORTLOCATIONS
			this.URLDSGHENTSPORTLOCATIONS = 'http://datatank.stad.gent/4/cultuursportvrijetijd/buurtsportlocaties.json';
			// Cached data from sportlocations in Ghent
			this._ghentSportlocations = null;
			// Callback : Load dataset Ghent Sportlocations via API
			this.loadGhentSportlocations();
		},
		"loadGhentSportlocations": function() {
			// Closure
			var self = this;
			// Load JSON from corresponding API with certain URL
			getJSONByPromise(this.URLDSGHENTSPORTLOCATIONS).then(
				function(data) {
					// Assign data value for global variable _ghentSportlocationsData within the app
					self._ghentSportlocationsData = data;
					// Call updateUI method when succesful
					self.updateUI();
				},
				function(status) {
					console.log(status);
				}
			);
		},
		"updateUI": function() {
			alert('UPDATE UI');
		}
	};
	App.init();
})();