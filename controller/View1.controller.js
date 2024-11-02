sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("kanye.rest.controller.View1", {
        onInit: function () {
            this.getView().setModel(new JSONModel(),"kanyeModel");
            this.chamaApi();

            window.setTimeout( function() {
                window.location.reload();
              }, 10000);

        },
        chamaApi () {
            
            const URL = "https://api.kanye.rest/";
            
            fetch(URL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.getView().getModel("kanyeModel").setProperty("/quotes", data.quote)
            })
            .catch(erro => {
                console.log(error,"Erro")
            })}
    });
});
