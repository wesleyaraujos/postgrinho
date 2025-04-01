namespace org.postgrinho;

using { cuid, managed } from '@sap/cds/common';

entity livros : cuid {

    title: String;
    value: Int16;

}

entity z2xpr1 : cuid, managed {

    key app: String;
    key variable: String;
    value: String;
    description: String;

}