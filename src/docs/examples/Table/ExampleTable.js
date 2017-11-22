import React from 'react';
import Table from 'recipe-components/Table';
import TableHeader from 'recipe-components/TableHeader';
import TableBody from 'recipe-components/TableBody';
import Heading from 'recipe-components/Heading';

/** Table with TableHeader and TableBody */
export default class ExampleTable extends React.Component {

  render() {
    return (
      <Table>
        <TableHeader>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Ingredients</th>
            <th>Directions</th>
            <th>Action</th>
          </tr>
        </TableHeader>
        <TableBody>
          <tr>
            <td><a href="/recipe/11/edit">Best Pound Cake</a></td>
            <td>Ellen Knott</td>
            <td>2 sticks butter, 1/2 c. Crisco, 3 c. sugar...</td>
            <td>Beat until fluffy, the butter and the Crisco. Add the...</td>
            <td><button type="button" class="btn btn-sm btn-danger">Delete</button></td>
          </tr>
          <tr>
            <td><a href="/recipe/2/edit">English Toffee</a></td>
            <td>Gensie Johnston</td>
            <td>2 c. chopped blanched almonds, 1 box light brown sugar (1 lb.), 7 or 8 milk chocolate Hershey bars...</td>
            <td>Spread half of the nuts over the bottom of a...</td>
            <td><button type="button" class="btn btn-sm btn-danger">Delete</button></td>
          </tr>
          <tr>
            <td><a href="/recipe/10/edit">Lynne's Caramel Icing</a></td>
            <td>Lynne Cathey</td>
            <td>1/2 c. butter, 1 c. brown sugar, 1/4 c. whipping cream...</td>
            <td>Melt butter. Add brown sugar, cook over low heat, stirring...</td>
            <td><button type="button" class="btn btn-sm btn-danger">Delete</button></td>
          </tr>
        </TableBody>
      </Table>
    );
  }
}
