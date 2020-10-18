import React from 'react';
import { Button, Grid, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import Listagem from './components/Listagem';

function App() {
    return (
        <>
            <div>
                <form>
                    <Grid container direction="row" alignItems={"center"} spacing={1} xs={12}>
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item xs={4}>
                            <h1>Lista de Contatos</h1>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" size="large" color="primary">
                                Adcicionar Contato &nbsp;
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <div>
                <form>
                <Grid container direction="collumn" spacing={1}>
                        <Grid item xs={12}>
                            <List component="nav" aria-label="main mailbox folders">
                                <ListItem>
                                    <ListItemText primary="Nome/Sobrenome" />
                                    <ListItemText primary="Celular" />
                                    <ListItemText primary="Telefone" />
                                    <ListItemText primary="E-mail" />
                                    <ListItemText primary="Outros" />
                                    <ListItemText primary="Opções" />
                                </ListItem>
                                <Divider />
                                
                                <Listagem />

                            </List>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </>
    );
}

export default App;

