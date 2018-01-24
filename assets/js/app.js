var app=angular.module("labelApp",[]);
app.controller("labelCntr",function($scope){
  $scope.list=true;
  $scope.label1=false;
  $scope.label2=false;
  $scope.label3=false;
  $scope.propertyEdit=false;
  $scope.inventoryEdit=false;
  $scope.compaignEdit=false;
  $scope.propertySave=true;
  $scope.inventorySave=true;
  $scope.compaignSave=true;
  $scope.propertyField=true;
  $scope.inventoryField=true;
  $scope.compaignField=true;
  $scope.propertyName="property";
  $scope.inventoryName="Inventory";
  $scope.compaignName="Compaign";
  $scope.showList=function(){
    $scope.list=!$scope.list;
  }
  $scope.editProperty=function(){
    $scope.label1=true;
    $scope.propertySave=false;
    $scope.propertyField=false;
    $scope.propertyEdit=true;
  }
  $scope.saveProperty=function(){
    $scope.label1=false;
    $scope.propertyEdit=false;
    $scope.propertySave=true;
    $scope.propertyField=true;

  }
  $scope.editInventory=function(){
    $scope.label2=true;
    $scope.inventorySave=false;
    $scope.inventoryField=false;
    $scope.inventoryEdit=true;
  }
  $scope.saveInventory=function(){
    $scope.label2=false;
    $scope.inventoryEdit=false;
    $scope.inventorySave=true;
    $scope.inventoryField=true;

  }
  $scope.editCampaign=function(){
    $scope.label3=true;
    $scope.compaignSave=false;
    $scope.compaignField=false;
    $scope.compaignEdit=true;
  }
  $scope.saveCompaign=function() {
    $scope.label3 = false;
    $scope.compaignEdit = false;
    $scope.compaignSave = true;
    $scope.compaignField = true;

  }
})
