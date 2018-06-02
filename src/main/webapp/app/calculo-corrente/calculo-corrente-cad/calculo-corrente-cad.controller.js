(function () {
  'use strict'

  angular.module('app')
    .controller('CalculoCorrenteCadController', CalculoCorrenteCadController);

    CalculoCorrenteCadController.$inject = ['CalculoCorrenteService', '$state', '$stateParams', 'DialogBuilder', 'AparelhoService'];

  function CalculoCorrenteCadController(CalculoCorrenteService, $state, $stateParams, DialogBuilder, AparelhoService) {

    var vm = this;
    vm.cadastro = {};
    vm.error = {};
    vm.aparelhos = [];

    vm.salvar = salvar;

    AparelhoService.findAllOver()
      .then(function (data) {
        vm.aparelhos = data;
      })

    if ($stateParams.id) {
      CalculoCorrenteService.findById($stateParams.id)
        .then(function (data) {
          vm.cadastro = data;
        });
    }

    function salvar() {
      if (!vm.cadastro.id) {
        CalculoCorrenteService.insert(vm.cadastro)
          .then(function (dado) {
            DialogBuilder.message('Cálculo inserido com sucesso!');
            $state.go("calculoCorrenteList");
          })
          .catch(function (error) {
            vm.error = error.data;
          });
      } else {
        CalculoCorrenteService.update(vm.cadastro)
          .then(function (dado) {
            DialogBuilder.message('Cálculo alterado com sucesso!');
            $state.go("calculoCorrenteList");
          })
          .catch(function (error) {
            vm.error = error.data;
          });
      }
    }

  }
})();