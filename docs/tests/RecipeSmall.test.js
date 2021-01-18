import React from 'react';

import { expect } from 'chai';

/*
shallow permet de faire le rendu d'un composant (JSX), sans faire le rendu des sous-
composants => pratique pour vérifier les props fournies aux sous-composants, et
pouvoir tester séparément chaque composant
*/
// https://enzymejs.github.io/enzyme/docs/api/shallow.html
import { shallow } from 'enzyme';

// import du composant à tester
import RecipeSmall from 'src/components/Home/RecipeSmall';

// on importe le composant Link parce qu'on en a besoin pour l'un des tests
import { Link } from 'react-router-dom';

describe('<RecipeSmall />', () => {
  it('Uses title given as props', () => {
    const titleValue = 'pizza';

    // on fait le rendu shallow du composant
    const wrapper = shallow(<RecipeSmall title={titleValue} thumbnail="img1.png" difficulty="Facile" isFavorite={false} />);

    // rechercher les h2 et vérifier qu'on en a un seul
    const h2Elements = wrapper.find('h2');
    expect(h2Elements).to.have.lengthOf(1);

    // vérifier que le contenu du h2 c'est ce qu'on a fourni pour la prop title
    // comme on a un seul h2, on peut agir directement dessus sans h2Elements[0]
    expect(h2Elements.text()).equal(titleValue);
  });

  it('Has a link towards the recipe', () => {
    const titleValue = 'pizza margherita';
    const slugTitle = 'pizza-margherita';

    // on fait le rendu shallow du composant
    const wrapper = shallow(<RecipeSmall title={titleValue} thumbnail="img1.png" difficulty="Facile" isFavorite={false} />);

    // on cherche les composants Link
    const links = wrapper.find(Link);

    // vérifier que j'en ai un seul
    expect(links).to.have.lengthOf(1);

    // vérifier la valeur de la prop 'to' fournie au composant Link
    // link.props() : les valeurs de props fournies au Link (c'est un objet)
    expect(links.props()).to.have.property('to', `/recipe/${slugTitle}`);
  });
});
