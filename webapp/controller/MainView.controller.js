sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {

    "use strict";

    return Controller.extend("com.training.exer5lara.controller.MainView", {
        onInit() {
        },
        onAddItem: function (){
                this.fnDisplayMsg("Add button pressed");
            },

            fnDisplayMsg: function (sMsg){
                MessageToast.show(sMsg);
            },

        onChangeMOP: function (oEvent) {
                var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
                var oMobileLabel = this.getView().byId("idLblPhone");
                var oMobileInput = this.getView().byId("idInputPhone");

                if (sSelectedKey === "GCASH"){
                    // show the mobile field
                    oMobileLabel.setVisible(true);
                    oMobileInput.setVisible(true);
                } else {
                    oMobileLabel.setVisible(false);
                    oMobileInput.setVisible(false);
                }
            },
        
        onPressCheckout: function (){
                var oInputFNameValue = this.getView().byId("idInptFName").getValue();

                // Check if first name is blank
                if (oInputFNameValue === ""){
                    sap.m.MessageToast.show("Required Field is blank"); 
                }
            },

    });
});