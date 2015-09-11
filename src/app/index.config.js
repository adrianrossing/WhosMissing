(function() {
  'use strict';

  angular
    .module('whosMissing')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    invokeParse();
  }

  function invokeParse(){
    Parse.initialize("Hr1qOfIviFMpED9Zdyoma7FXhhyFJAyU9bV2sInX","Pod2feVya2MbEiFeBnMeTZf0wJOPMjAJf54DQyDj");
  }




})();
