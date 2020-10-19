import React from 'react';
import { Grid, List, ListItem, ListItemText, Button, Divider } from '@material-ui/core';
import Listagem from './Listagem';
import axios from 'axios'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pessoas: [] };
    }
    
    listarPessoas() {
        axios.get('http://localhost/Prova-dev-CBMSE/api/pessoas/listar.php')
            .then(response => {
                this.setState({ pessoas: response.data })
            })
    }

    componentDidMount() {
        this.listarPessoas()
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <form>
                        <Grid container direction="row" alignItems={"center"} spacing={1}>
                            <Grid item xs={3}>
                            </Grid>
                            <Grid item xs={4}>
                                <h1>Lista de Contats</h1>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" size="large" color="primary" onClick={() => this.props.changePage("addPessoa")}>
                                    Adcicionar Pessoa &nbsp;
                                    </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <div>
                    <form>
                        <Grid container direction="column" spacing={1}>
                            <Grid item xs={5}>
                                <List component="nav" aria-label="main mailbox folders">
                                    <ListItem>
                                        <ListItemText primary="Nome Completo" />
                                        <ListItemText primary="Opções" />
                                    </ListItem>
                                    <Divider />
                                </List>
                            </Grid>
                            <Grid item xs={12}>
                                {this.state.pessoas.map(el => (
                                    <Listagem nome={el.nome} sobrenome={el.sobrenome} id={el.id} listarPessoas={() => this.listarPessoas()} setUser={(id) => this.props.setUser(id)} changePage={(page) => this.props.changePage(page)} />
                                ))}
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </ React.Fragment>
        );
    }
}

export default Home;

