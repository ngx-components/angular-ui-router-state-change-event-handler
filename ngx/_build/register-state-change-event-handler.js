export default function(ngModule, options){

  ngModule.run(registerEventHandler);

  /**
   * Register event handler for ui-router state change
   *
   * Contains boilerplate for event listeners for all ui-router state change events.
   * Remove event listeners you don't need.
   *
   * See https://github.com/angular-ui/ui-router/wiki for more information.
   */
  function registerEventHandler($rootScope) {

    // Fired when the transition begins
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

      // ADD CUSTOM LOGIC HERE
      // event.preventDefault();
    });

    // Fired when the state transition is complete
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

      // ADD CUSTOM LOGIC HERE
      // event.preventDefault();
    });

    // Fired when an error occurs during transition
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

      // ADD CUSTOM LOGIC HERE
      // event.preventDefault();
    });

  }

  // Inject dependencies;
  registerEventHandler.$inject = ['$rootScope'];

};

