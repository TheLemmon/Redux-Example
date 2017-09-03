import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

const Main = () => {
    return (
      <Grid>
        <Row>
          <Col sm={8}>
            <ProductList />
          </Col>
          <Col sm={4}>
            <ShoppingCart />
          </Col>
        </Row>
      </Grid>
    )
}

export default Main