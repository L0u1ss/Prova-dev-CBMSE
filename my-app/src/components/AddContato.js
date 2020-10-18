import { Grid, Button, TextField, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import axios from "axios";

class AddContato extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tipoContato: "", contato: "" };
    }

    addContato() {
        axios.post('http://localhost/Prova-dev-CBMSE/api/pessoas/contatos/adicionar.php', {
            userid: this.props.userid,
            contato: this.state.contato,
            tipoContato: this.state.tipoContato
        })
            .then((response) => {
                this.props.changePage("home")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    tiposDeContato() {
        axios.get('http://localhost/Prova-dev-CBMSE/api/pessoas/listar.php')
            .then(response => {
                this.setState({ pessoas: response.data })
            })
    }

    componentDidMount() {
        //this.tiposDeContato()
    }

    handleText(evento) {
        if (evento.target.name === "contato") {
            this.setState({ contato: evento.target.value })
        } else if (evento.target.name === "tipo") {
            this.setState({ tipoContato: evento.target.value })
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
                                <h1>Adicionar Contato</h1>
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
                                <InputLabel id="demo-simple-select-outlined-label">Tipo</InputLabel>
                                <Select
                                    name="tipo"
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={this.state.tipoContato}
                                    onChange={(e) => this.handleText(e)}
                                    label="Tipo">
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Telefone</MenuItem>
                                    <MenuItem value={2}>celular</MenuItem>
                                    <MenuItem value={3}>E-mail</MenuItem>
                                    <MenuItem value={4}>Outros</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={1}>
                                <TextField name="contato" label="Contato" variant="outlined" value={this.state.contato} onChange={(e) => this.handleText(e)} />
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
                                <Button variant="contained" size="small" color="primary" onClick={() => this.addContato()}>
                                    Salvar &nbsp;
                                </Button>
                            </Grid>
                            <Grid item xs={1}>
                                <Button variant="contained" size="small" color="primary" onClick={() => this.props.changePage("verPessoa")}>
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
export default AddContato;