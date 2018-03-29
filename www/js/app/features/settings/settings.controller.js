(function () {
  'use strict';
  var settings = angular.module('app.settings', []);

  settings.config(config);
  settings.controller('settingsController', settingsController);

  /* @ngInject */
  function config($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escaped');
    $translateProvider.useStaticFilesLoader({
      prefix: 'js/app/common/languages/locale-',
      suffix: '.json',
    });

    $translateProvider.preferredLanguage('es');
  }

  /* @ngInject */
  function settingsController($translate, settingsService) {
    var vm = this;

    activate();

    vm.changeLanguage = changeLanguage;
    vm.changeLetterSize = changeLetterSize;

    function activate() {
      vm.setting = settingsService.get();
      if (vm.setting.lang !== '') {
        $translate.use(vm.setting.lang);
      }

      if (vm.setting.fontS !== '') {
        vm.fontSize = 'font-size-' + vm.setting.fontS;
      }
    }

    function changeLanguage(language) {
      $translate.use(language);
      vm.setting.lang = language;
      settingsService.update(vm.setting);
    }

    function changeLetterSize(size) {
      vm.fontSize = 'font-size-' + size;
      vm.setting.fontS = size;
      settingsService.update(vm.setting);
    }
  }
})();
