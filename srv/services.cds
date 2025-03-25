using org from '../db/entities';

service livraria{

    entity livros as projection on org.postgrinho.livros;

}