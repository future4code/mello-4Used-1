import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from './Card';

const styles = (theme) => ({
  root: {
    width: '85vw',
    padding: '32px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '16px',
    overflow: 'auto',
  },
});

function ComplexGrid(props) {
  const renderProducts = props.products.map((product) => {
    return (
      <Card
        productId={product.id}
        addToCart={props.addToCart}
        foto={product.photos[0]}
        name={product.name}
        preco={product.price}
        handleActiveContent={props.handleActiveContent}
      />
    );
  });

  const { classes } = props;
  return <div className={classes.root}>{renderProducts}</div>;
}

export default withStyles(styles)(ComplexGrid);
