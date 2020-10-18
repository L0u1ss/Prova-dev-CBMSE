import { Grid, Button, TextField } from '@material-ui/core';
import React from 'react';
import axios from "axios"

class EditPessoa extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nome: "", sobrenome: "" };
    }

    editPessoa() {
        axios.patch('http://localhost/Prova-dev-CBMSE/api/pessoas/editar.php', {
            userid: this.props.userid,
            nome: this.state.nome,
            sobrenome: this.state.sobrenome
        })
            .then((response) => {
                console.log(response);
                this.props.changePage("home")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleText(evento) {
        if (evento.target.name === "nome") {
            this.setState({ nome: evento.target.value })
        } else if (evento.target.name === "sobrenome") {
            this.setState({ sobrenome: evento.target.value })
        }
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
                                <h1>Editar Pessoa</h1>
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
                                <TextField name="nome" label="Nome" variant="outlined" value={this.state.nome} onChange={(e) => this.handleText(e)} />
                            </Grid>
                            <Grid item xs={1}>
                                <TextField name="sobrenome" label="Sobrenome" variant="outlined" value={this.state.sobrenome} onChange={(e) => this.handleText(e)} />
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
                                <Button variant="contained" size="small" color="primary" onClick={() => this.editPessoa()}>
                                    Salvar &nbsp;
                                </Button>
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
export default EditPessoa;