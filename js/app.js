var resumeApp = angular.module('resumeApp', ['resumeControllers']);

resumeApp.run(function($rootScope, $http) {
    /*
        Receive emitted message and broadcast it.
        Event names must be distinct or browser will blow up!
        */
        $http.get('data.json').success(function(data) {
        	$rootScope.data = data;
        	$rootScope.$broadcast('takeIntro', $rootScope.data.intro);
        	$rootScope.$broadcast('takeJobsEduc', $rootScope.data.jobsEducation);
        	$rootScope.$broadcast('takeHead', $rootScope.data.title);
        });

        

    });