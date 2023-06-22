import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let respone = await fetch(url);
    let data = await respone.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-detail-img">
          <img src={product?.img}></img>
        </Col>
        <Col className="product-detail-info">
          <div>{product?.title}</div>
          <div>\ {product?.price}</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                size
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product?.size.map((size) => (
                  <Dropdown.Item href="#/action-1">{size}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
