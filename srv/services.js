const cds = require('@sap/cds');

const { z2xpr1 } = cds.entities('org.postgrinho');

module.exports = cds.service.impl(

    function () {

        ///odata/v4/parameters/getvalues(app='CORINTHIANS',variable='TESTE')
        this.on('getvalues', '', async (req, res)=>{

            const { app, variable } = req.data;  

            let whereClause = {};
            if (app) whereClause.app = app;
            if (variable) whereClause.variable = variable;            
            
            const dbvalues = await SELECT.from(z2xpr1).where(whereClause);

            const values = dbvalues.map(line => line.value);

            return res = values;

        });    

    }

)