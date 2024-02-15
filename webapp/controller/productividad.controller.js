sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,formatter) {
        "use strict";

        return Controller.extend("productividad.controller.productividad", {
            formatter: formatter,
            onInit: function () {

            },
            onDetailsVisita: function(oEvent) {
                const oItem = oEvent.getSource();
                const oRouter = this.getOwnerComponent().getRouter();
                
                console.log(oItem.getBindingContext("visitas").getPath().substr(1));

                        oRouter.navTo("detail", {
                    visitaDetailPath: window.encodeURIComponent(oItem.getBindingContext("visitas").getPath().substr(1))
                });
            }
        });
    });
