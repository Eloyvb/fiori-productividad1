sap.ui.define([], () => {
    'use strict';
    return {
       
        organizacionVentas(sOrgVtas) {
           // console.log(sOrgVtas);
            const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            switch (sOrgVtas) {
				case "1001":
					return oResourceBundle.getText("orgVtasTepic");
				case "1202":
					return oResourceBundle.getText("orgVtasVallarta");
				case "1203":
					return oResourceBundle.getText("orgVtasSanVicente");
				default:
					return sOrgVtas;
           }
           
        }
    };
   
});