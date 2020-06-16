import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = (theme) => ({
  paper: {
    color: theme.palette.text.secondary,
    padding: 16,
    width: 250,
    height: 350,
  },
  image: {
    width: 175,
    height: 175,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function Card(props) {
  const { classes } = props;
  const handleSelectProduct = () => {
    props.addToCart(props.productId);
    props.handleActiveContent('gridCarrinho');
  };
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={16}>
        <Grid item>
          <ButtonBase onClick={handleSelectProduct} className={classes.image}>
            <img className={classes.img} alt='complex' src={props.foto} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant='subtitle1'>
                {props.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant='subtitle1'>{props.preco}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(Card);
