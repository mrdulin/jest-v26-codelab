import React from 'react';
import { Link } from 'react-router-dom';

interface OrderProps {
  order: {
    orderId: string;
    brand: string;
  };
}
export const Order = (props: OrderProps) => {
  return (
    <Link
      key={props.order.orderId}
      to={{
        pathname: `/order/${props.order.brand}/${props.order.orderId}`,
        state: { securityAddressed: true },
      }}
      className="order-history-link"
    ></Link>
  );
};
