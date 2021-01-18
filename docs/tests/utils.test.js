// fichier de test pour src/utils/index.js

// on importe une syntaxe de chai
import { should } from 'chai';

// on importe la ou les fonctions à tester
import { slugifyTitle, getRecipeBySlug } from 'src/utils';

// on importe des données de test
import recipes from '../recipes';

// spécificité de should : il faut l'exécuter une première fois pour pouvoir l'utiliser
should();

/*
describe décrit un bloc de tests (on peut imbriquer), 2 paramètres :
- un texte qui décrit le bloc
- une callback qui permet d'exécuter les tests pour ce bloc
*/
describe('utils', () => {
  describe('slugifyTitle', () => {
    /*
    it décrit un cas de test (une ou plusieurs assertions), 2 paramètres :
    - un texte qui décrit le cas de test
    - une callback qui permet d'exécuter les tests pour ce cas
    */
    it('is a function', () => {
      slugifyTitle.should.be.a('function');
    });

    it('returns a string', () => {
      // const result = slugifyTitle('test');
      // result.should.be.a('string');
      slugifyTitle('test').should.be.a('string');
    });

    it('replaces spaces', () => {
      slugifyTitle(' la voiture ').should.equal('la-voiture');
    });

    it('replaces upper case', () => {
      slugifyTitle('ImTesting').should.equal('imtesting');
    });
  });

  describe('getRecipeBySlug', () => {
    it('is a function', () => {
      getRecipeBySlug.should.be.a('function');
    });

    it('get the recipe with the given slug', () => {
      // on utilise les recettes du fichier de données => recipes

      // je calcule le slug de la première recette
      const slug = slugifyTitle(recipes[0].title);

      // je vérifie que je récupère bien la première recette avec ce slug
      getRecipeBySlug(slug, recipes).should.equal(recipes[0]);
    });
  });
});
