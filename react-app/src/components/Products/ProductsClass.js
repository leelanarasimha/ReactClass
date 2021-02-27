import { Component } from 'react';

export default class ProductsClass extends Component {
    constructor(props) {
        super(props);
        const productsData = [
            {
                id: 1,
                name: 'Samsung M51',
                description: 'Samsung Description',
            },
            {
                id: 2,
                name: 'Grinder',
                description: 'dsdsdsdsd',
            },
            {
                id: 3,
                name: 'Grinderdsdsd',
                description: 'dsdsdsdsdsds',
            },
        ];

        this.state = {
            products: productsData,
        };
    }

    getProductsHtml() {
        let productsHtml = [];

        for (let product of this.state.products) {
            productsHtml.push(
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                </tr>,
            );
        }

        return productsHtml;
    }

    render() {
        return (
            <div>
                <div>Products List</div>

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product) => {
                            return (
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
