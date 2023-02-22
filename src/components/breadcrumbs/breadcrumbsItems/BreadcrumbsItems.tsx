import React from 'react'
import Breadcrumbs from '../Breadcrumbs';
import { Link } from 'react-router-dom';

const BreadcrumbsItems = ({breadcrumbs}) => {
    const breadcrumbs = [
        { text: 'Home', path: '/' },
        { text: 'Products', path: '/products' },
        { text: 'Shoes', path: '/products/shoes' },
      ];
    
      return (
        <div>
          <Breadcrumbs breadcrumbs={breadcrumbs} children={undefined} />
          <h1>Shoes</h1>
          <p>View our selection of shoes below:</p>
          <ul>
            <li>
              <Link to="/products/shoes/nike">Nike</Link>
            </li>
            <li>
              <Link to="/products/shoes/adidas">Adidas</Link>
            </li>
            <li>
              <Link to="/products/shoes/puma">Puma</Link>
            </li>
          </ul>
        </div>
      );
    };

export default BreadcrumbsItems
