import React from 'react';
import { Grid, List, ListItem, ListItemText, Button, ButtonGroup } from '@material-ui/core';
import axios from 'axios'

class ListContato extends React.Component {
    constructor(props) {
        super(props);
    }

    removeContato() {
        axios.delete('http://localhost/Prova-dev-CBMSE/api/pessoas/contatos/remover.php?contatoid=' + this.props.contatoid)
            .then(response => {
                console.log(response)
                this.props.listarContatos()
            })
    }

    editContato() {
        let contato = { id: this.props.contatoid, contato: this.props.contato, tipo: this.props.tipo }
        this.props.setContato(contato)
        console.log(contato)
        this.props.changePage("editContato")
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <form>
                        <Grid container direction="column" spacing={1}>
                            <Grid item xs={4}>
                                <List component="nav" aria-label="main mailbox folders">
                                    <ListItem>
                                        <ListItemText secondary={this.props.tipo} />
                                        <ListItemText secondary={this.props.contato} />
                                        <ButtonGroup variant="contained" color="primary" size="small" aria-label="contained primary button group">
                                            <Button onClick={() => this.editContato()}>
                                                Editar
                                            </Button>
                                            <Button onClick={() => this.removeContato()}>
                                                Excluir
                                            </Button>
                                        </ButtonGroup>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default ListContato;

