using org from '../db/entities';

service livraria{

    entity livros @(        
        Capabilities : {
            InsertRestrictions : {
                $Type : 'Capabilities.InsertRestrictionsType',
                Insertable: true,
            },
            UpdateRestrictions : {
                $Type : 'Capabilities.UpdateRestrictionsType',
                Updatable: true,
            },
            DeleteRestrictions : {
                $Type : 'Capabilities.DeleteRestrictionsType',
                Deletable: true,
            },
        }   
    ) as projection on org.postgrinho.livros;

    annotate livros with @odata.draft.enabled;
    
}

service parameters{

    entity z2xpr1 as projection on org.postgrinho.z2xpr1 actions{
    
    }

    function getvalues(app: String, variable: String) returns array of String;

    

}