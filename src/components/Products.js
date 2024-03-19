import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap';
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
const Products = () => {
    
    return (
        <div>
            <Container >
                <div className="row">
                    <div className="col-sm">
          {productsArr.map(product => (
            <div key={product.title}>
                <h3>{product.title}</h3>
                <div class="row">
                    
             <img src={product.imageUrl} alt={product.title}  height="250px" width="25px"/>
              </div>
            <div class="row">
              <div class='col'><p>${product.price}</p></div>
              <div class='col'> <Button variant="info">Add to Cart</Button></div>
              </div>

            </div>
          ))}
          </div>
          </div>
          </Container>
         
        </div>
      );
    }

export default Products;