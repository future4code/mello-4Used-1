import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from './Card';

const styles = theme => ({
    root: {
        display: 'grid',
        flexGrow: 1,
        border: '1 px solid black',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gridGap: '1rem'
    },
});



function ComplexGrid(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Card foto='https://i.picsum.photos/id/136/200/200.jpg' name='xícara' preco='R$30,00' />
            <Card foto='https://i.picsum.photos/id/136/200/200.jpg' name='xícara' preco='R$30,00' />
            <Card foto='https://i.picsum.photos/id/136/200/200.jpg' name='xícara' preco='R$30,00' />
            <Card foto='https://i.picsum.photos/id/136/200/200.jpg' name='xícara' preco='R$30,00' />
            <Card foto='https://i.picsum.photos/id/136/200/200.jpg' name='xícara' preco='R$30,00' />
            <Card foto='https://i.picsum.photos/id/136/200/200.jpg' name='xícara' preco='R$30,00' />


        </div>
    );
}



export default withStyles(styles)(ComplexGrid);