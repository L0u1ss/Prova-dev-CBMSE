import React from 'react';
import AddPessoa from './components/AddPessoa';
import Home from './components/Home';
import EditPessoa from './components/EditPessoa'
import VerPessoa from './components/VerPessoa'
import AddContato from './components/AddContato';
import EditContato from './components/EditContato'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: "home", user: { id: 0, nome: "", sobrenome: "" }, contato: { id: 0, contato: "", tipo: 0 } };
    }

    changePage(page) {
        this.setState({ page: page })
    }

    setUser(user) {
        this.setState({ user: user })
    }

    setContato(contato) {
        this.setState({ contato: contato })
    }

    render() {
        if (this.state.page === "home") {
            return (
                <Home changePage={(page) => this.changePage(page)} setUser={(user) => this.setUser(user)} />
            );
        } else if (this.state.page === "addPessoa") {
            return (
                <AddPessoa changePage={(page) => this.changePage(page)} />
            );
        } else if (this.state.page === "editPessoa") {
            return (
                <EditPessoa userid={this.state.user.id} nome={this.state.user.nome} sobrenome={this.state.user.sobrenome} changePage={(page) => this.changePage(page)} />
            );
        } else if (this.state.page === "verPessoa") {
            return (
                <VerPessoa userid={this.state.user.id} nome={this.state.user.nome} sobrenome={this.state.user.sobrenome} changePage={(page) => this.changePage(page)} setContato={(contato) => this.setContato(contato)} opcoes={{1:"Telefone",2:"Celular",3:"E-mail",4:"Outros"}} />
            );
        } else if (this.state.page === "addContato") {
            return (
                <AddContato userid={this.state.user.id} nome={this.state.user.nome} sobrenome={this.state.user.sobrenome} changePage={(page) => this.changePage(page)} />
            );
        } else if (this.state.page === "editContato") {
            return (
                <EditContato userid={this.state.user.id} nome={this.state.user.nome} sobrenome={this.state.user.sobrenome} contatoid={this.state.contato.id} contato={this.state.contato.contato} tipo={this.state.contato.tipo} changePage={(page) => this.changePage(page)} />
            );
        }
    }
}

export default App;
