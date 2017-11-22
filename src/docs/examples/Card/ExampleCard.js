import React from 'react';
import Card from 'recipe-components/Card';
import CardHeader from 'recipe-components/CardHeader';
import CardBody from 'recipe-components/CardBody';
import Heading from 'recipe-components/Heading';

/** Card with CardHeader and CardBody */
export default class ExampleCard extends React.Component {

  render() {
    return (
      <Card>
        <CardHeader>
          <Heading level="2">Pecan Pie</Heading>
          <p>Author: Jean Wilson</p>
        </CardHeader>
        <CardBody>
          <Heading level="3">Ingredients</Heading>
          <ul>
            <li>3 eggs</li>
            <li>1 c. white sugar</li>
            <li>dash salt</li>
            <li>1 tsp. vanilla</li>
            <li>1/2 c. dark Karo syrup</li>
          </ul>
          <Heading level="3">Directions</Heading>
          <p>Melt 6 Tbsp. butter, mix in. Add 1 c. chopped nuts. Bake 57 mins. at 325 or 350.</p>
        </CardBody>
      </Card>
    );
  }
}
