import React from 'react';
import './App.css';
import { Button, Grid } from '@material-ui/core';
import Listagem from './components/Listagem';

function App() {
    return (
        <>
            <div>
                <form>
                    <Grid container direction="row" alignItems={"center"} spacing={1}>
                        <Grid item xs={4}>
                            <h1>Agenda de Contatos</h1>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" size="large" color="primary" >
                                Adcicionar Contato &nbsp;
                      </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <div>
                <form>
                    <Listagem />
                </form>
            </div>
        </>
    );
}

export default App;

