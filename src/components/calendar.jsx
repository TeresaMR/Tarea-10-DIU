import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 0,
  width: 80,
  height: 80,
}));

function FormRow() {
  return (
    <>
    <Grid item>
      <Item>Item</Item>
    </Grid>
      {
        [0,1,2,3,4].map((row) => {
          return(
            <Grid key={row} item xs={0}>
              <Item>Item</Item>
            </Grid>
            )})
      }
  </>
  );
}

export default function Calendar() {
  return (
    <Box sx={{ flexGrow: 0 }}>
    <Grid container spacing={0}>
      
      {
        [0,1,2,3,4].map((column) => {
          return(
            <Grid key={column} container item spacing={0}>
              <FormRow />
            </Grid>
          )})
      }
    </Grid>
    </Box>
  );
}