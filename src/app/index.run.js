(function() {
  'use strict';

  angular
    .module('whosMissing')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
