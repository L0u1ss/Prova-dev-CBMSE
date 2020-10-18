import React from 'react';
import {Grid, List, ListItem, ListItemText, Button, ButtonGroup} from '@material-ui/core';

let nome="passar nome aqui ?";
let celular="passar celular aqui ?";
let telefone="passar telefone aqui ?";
let email="passar email aqui ?";
let outros="passar outros aqui ?";

function Listagem() {
    return (
        <>
            <div>
                <form>
                    <Grid container direction="collumn" spacing={1}>
                        <Grid item xs={11}>
                            <List component="nav" aria-label="main mailbox folders">
                                <ListItem>
                                    <ListItemText secondary={nome} />
                                    <ListItemText secondary={celular} />
                                    <ListItemText secondary={telefone} />
                                    <ListItemText secondary={email} />
                                    <ListItemText secondary={outros} />
                                    <ButtonGroup variant="contained" color="primary" size="small" aria-label="contained primary button group">
                                        <Button>Editar</Button>
                                        <Button>Excluir</Button>
                                    </ButtonGroup>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </>
    );
}

export default Listagem;

