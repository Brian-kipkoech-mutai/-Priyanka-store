
import React from 'react';
import Products from './products';
import { productsData } from '@/Data/products';

 export function Featured(props) {
    return (
         <Products data={productsData.featured}/>
    );
 }
  export function Latest(props) {
    return <Products data={productsData.latest} />;
  }

