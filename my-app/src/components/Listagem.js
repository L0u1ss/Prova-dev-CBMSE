import React from 'react';
import { Grid, List, ListItem, ListItemText, Button, ButtonGroup } from '@material-ui/core';
import axios from 'axios'

class Listagem extends React.Component {
    constructor(props) {
        super(props);
    }

    removePessoa() {
        axios.delete('http://localhost/Prova-dev-CBMSE/api/pessoas/remover.php?userid=' + this.props.id)
            .then(response => {
                this.props.listarPessoas()
            })
    }

    morePessoa(destino) {
        let pessoa = { id: this.props.id, nome: this.props.nome, sobrenome: this.props.sobrenome }
        this.props.setUser(pessoa)
        console.log(pessoa)
        this.props.changePage(destino)
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
                                        <ListItemText secondary={this.props.nome + " " + this.props.sobrenome} />
                                        <ButtonGroup variant="contained" color="primary" size="small" aria-label="contained primary button group">
                                            <Button onClick={() => this.morePessoa("verPessoa")}>
                                                Visualizar
                                            </Button>
                                            <Button onClick={() => this.morePessoa("editPessoa")}>
                                                Editar
                                            </Button>
                                            <Button onClick={() => this.removePessoa()}>
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

export default Listagem;

