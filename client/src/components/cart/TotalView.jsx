import { useState, useEffect } from 'react';
import { Typography, Box, styled } from '@mui/material';

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p, & > h6 {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & > h6 {
    margin-bottom: 20px;
  }
`;

const Price = styled(Box)`
  float: right;
`;

const Discount = styled(Typography)`
  color: green;
  font-weight: 500;
`;

const TotalView = ({ cartItems, onTotalCalculated }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let totalPrice = 0;
    let totalDiscount = 0;
    cartItems.forEach(item => {
      totalPrice += item.price.mrp;
      totalDiscount += item.price.mrp - item.price.cost;
    });

    setPrice(totalPrice);
    setDiscount(totalDiscount);

    const finalAmount = totalPrice - totalDiscount + 40;
    if (onTotalCalculated) {
      onTotalCalculated(finalAmount);  
    }
  };

  return (
    <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
        <Typography>
          Price ({cartItems?.length} item)
          <Price component="span">₹{price}</Price>
        </Typography>
        <Typography>
          Discount
          <Price component="span">₹{discount}</Price>
        </Typography>
        <Typography>
          Delivery Charges
          <Price component="span">₹40</Price>
        </Typography>
        <Typography variant="h6">
          Total Amount
          <Price component="span">₹{price - discount + 40}</Price>
        </Typography>
        <Discount>You will save ₹{discount - 40} on this order.</Discount>
      </Container>
    </Box>
  );
};

export default TotalView;
