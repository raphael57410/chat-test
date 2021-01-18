import { expect } from 'chai';

// on importe le code à tester
import reducerRecipes from 'src/reducers/recipesReducer';

// on importe l'action creator
import { saveRecipes } from 'src/actions/recipes';

import recipes from '../recipes';

describe('reducer for recipes', () => {
  // only (sur describe ou sur it) permet d'exécuter seulement certains tests
  // (=> bien penser à l'enlever quand on a fini de mettre au point le test)
  // it.only('is a function', () => {

  // skip (sur describe ou sur it) permet de zapper l'exécution d'un test
  //  it.skip('is a function', () => {
  it('is a function', () => {
    expect(reducerRecipes).to.be.a('function');
  });

  it('test initial state', () => {
    // on va appeler le reducer sans arguments pour récupérer son state initial

    // state initial attendu
    const expectedInitialState = {
      recipesList: [],
      favorites: [],
      loading: true,
    };

    // to.equal => comparaison "en surface", regarde juste si les objets
    // sont stockés au même endroit
    // to.deep.equal => comparaison en profondeur, compare chaque propriété des
    // objets
    expect(reducerRecipes()).to.deep.equal(expectedInitialState);
  });

  it('check treatment of action SAVE_RECIPES', () => {
    // on déclare un state
    const stateBefore = {
      recipesList: [],
      loading: true,
    };

    // on déclare un payload pour l'action
    const payload = recipes;

    // on déclare une action de type SAVE_RECIPES
    const action = saveRecipes(payload);

    // on calcule le state qu'on devrait avoir en résultat
    const expectedStateAfter = {
      recipesList: payload,
      loading: false,
    };

    // on appelle le reducer avec le state et l'action => le résultat devrait être
    // un state modifié avec le payload de l'action
    expect(reducerRecipes(stateBefore, action)).to.deep.equal(expectedStateAfter);

    // je pourrais aussi vérifier que le state d'avant n'a pas été modifié
    expect(stateBefore.recipesList).to.not.equal(payload);
  });
});
