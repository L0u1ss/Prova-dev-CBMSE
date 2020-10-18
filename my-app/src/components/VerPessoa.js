import { Grid, List, ListItem, ListItemText, Button, Divider } from '@material-ui/core';
import React from 'react';
import axios from "axios";
import ListContato from './ListContato';

class VerPessoa extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contatos: [] };
    }

    listarContatos() {
        axios.get('http://localhost/Prova-dev-CBMSE/api/pessoas/contatos/listar.php?userid='+this.props.userid)
            .then(response => {
                console.log(response.data)
                this.setState({ contatos: response.data })
            })
    }

    componentDidMount() {
        this.listarContatos()
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <form>
                        <Grid container direction="row" alignItems={"center"} spacing={1}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={2}>
                                <h1>Visualizar Pessoa</h1>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <div>
                    <form>
                        <Grid container direction="row" alignItems={"center"} spacing={1}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={1}>
                                Nome:&nbsp;&nbsp;{this.props.nome}
                            </Grid>
                            <Grid item xs={2}>
                                Sobrenome:&nbsp;&nbsp;{this.props.sobrenome}
                            </Grid>
                            <Grid item xs={1}>
                                <Button variant="contained" size="small" color="primary" onClick={() => this.props.changePage("addContato")}>
                                    Adcicionar Contato
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
                                        <ListItemText primary="Tipo" />
                                        <ListItemText primary="Contato" />
                                        <ListItemText primary="Opções" />
                                    </ListItem>
                                    <Divider />
                                </List>
                            </Grid>
                            <Grid item xs={12}>
                                {this.state.contatos.map(el => (
                                    <ListContato tipo={this.props.opcoes[el.tipo_contato_id]} contato={el.contato} contatoid={el.id} changePage={(page) => this.props.changePage(page)} listarContatos={() => this.listarContatos()} setContato={(contato) => this.props.setContato(contato)} />
                                ))}
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <div>
                    <form>
                        <Grid container direction="row" alignItems={"center"} spacing={1}>
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={1}>
                                <Button variant="contained" size="small" color="primary" onClick={() => this.props.changePage("home")}>
                                    Voltar &nbsp;
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </ React.Fragment>
        )
    }
}
export default VerPessoa;