import React from "react"
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElms"
const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          const { img, alt, name, desc, price, button } = product
          return (
            <ProductCard key={index}>
              <ProductImg src={img} alt={alt} />
              <ProductInfo>
                <ProductTitle>{name}</ProductTitle>
                <ProductDesc>{desc}</ProductDesc>
                <ProductPrice>{price}</ProductPrice>
                <ProductButton>{button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          )
        })}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products
