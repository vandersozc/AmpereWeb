(function () {
  'use strict'

  angular.module('app')
    .controller('AparelhoListController', AparelhoListController);

  AparelhoListController.$inject = ['AparelhoService', 'DialogBuilder'];

  function AparelhoListController(AparelhoService, DialogBuilder) {

    var vm = this;
    vm.lista = {};
    vm.filtro = '';
    vm.page = {
      number: 1,
      size: '15'
    }

    vm.atualizar = inicializa;
    vm.resetFiltro = function () {
      vm.filtro = '';
      inicializa();
    }

    vm.goToPage = function (page) {
      vm.page.number = page;
      inicializa();
    }

    function inicializa() {
      AparelhoService.findAll(vm.filtro, vm.page)
        .then(function (data) {
          vm.lista = data;
        });
    }

    vm.excluir = function (item) {
      DialogBuilder.confirm('Tem certeza que deseja remover o registro?')
        .then(function (result) {
          if (result.value) {
            AparelhoService.remove(item.id)
              .then(function () {
                DialogBuilder.message('Registro excluído com sucesso!');
                inicializa();
              });
          } else {
            DialogBuilder.message({
              title: 'Exclusão cancelada pelo usuário!',
              type: 'error'
            });
          }
        });
    }
    
    inicializa();
  }

})();