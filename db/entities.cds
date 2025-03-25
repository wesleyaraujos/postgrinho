namespace org.postgrinho;

using { cuid } from '@sap/cds/common';

entity livros : cuid {

    title: String;
    value: Int16;

} 