import { useState } from 'react';

export default function Products() {
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
    const [products, setProducts] = useState(productsData);

    let productsHtml = [];

    for (let product of products) {
        productsHtml.push(
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
            </tr>,
        );
    }

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
                    {products.map((product) => {
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
