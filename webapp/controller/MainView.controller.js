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
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sMsg = oTextBundle.getText("addButtonMsg");
                this.fnDisplayMsg(sMsg);
            },

            fnDisplayMsg: function (sMsg){
                MessageToast.show(sMsg);
            },

        onChangeMOP: function (oEvent) {
                var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
                var oMobileLabel = this.getView().byId("idLblPhone");
                var oMobileInput = this.getView().byId("idInputPhone");
                var oCCDetailsLabel = this.getView().byId("idLblCCDetails");
                var oCCDetailsInput = this.getView().byId("idInputCCDetails");
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sMsg = "";

                if (sSelectedKey === "GCASH"){
                    // show the mobile field
                    oMobileLabel.setVisible(true);
                    oMobileInput.setVisible(true);

                    // hide the credit card details field
                    oCCDetailsLabel.setVisible(false);
                    oCCDetailsInput.setVisible(false);

                    // set message toast with the selected payment method
                    sMsg = oTextBundle.getText("selGCashMsg");
                }
                else if (sSelectedKey === "CC"){
                    // show the credit card details field
                    oCCDetailsLabel.setVisible(true);
                    oCCDetailsInput.setVisible(true);

                    // hide the mobile field
                    oMobileLabel.setVisible(false);
                    oMobileInput.setVisible(false);

                    // set message toast with the selected payment method
                    sMsg = oTextBundle.getText("selCCMsg");
                }
                else if (sSelectedKey === "COD"){
                    // hide both the mobile and credit card details fields
                    oMobileLabel.setVisible(false);
                    oMobileInput.setVisible(false);
                    oCCDetailsLabel.setVisible(false);
                    oCCDetailsInput.setVisible(false);

                    // set message toast with the selected payment method
                    sMsg = oTextBundle.getText("selCODMsg");
                }

                // show message toast with the selected payment method
                MessageToast.show(sMsg);
            },
        
        onPressCheckout: function (){
                var oInputFNameValue = this.getView().byId("idInptFName").getValue();
                var oInputLNameValue = this.getView().byId("idInptLName").getValue();
                // Check if first name or last name is blank
                if (oInputFNameValue === "" || oInputLNameValue === ""){
                    var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                    var sErrMsg = oTextBundle.getText("checkoutButtonErrMsg");
                    sap.m.MessageToast.show(sErrMsg); 
                }
            },

    });
});