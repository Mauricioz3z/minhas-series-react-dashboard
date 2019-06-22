import React, { Component, Fragment } from 'react'
import api from "../common/api";
import Input from '../components/input'
import { resolveSoa } from 'dns';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';


const initialState = {
    serie: { name: "", status: "to-watch", blocking: false },
    list: []
}

export default class Series extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    toggleBlocking() {
        this.setState({ blocking: !this.state.blocking });
      }
    
    toastMessage(mensagem, type) {
        toast[type](mensagem, { position: toast.POSITION.BOTTOM_RIGHT })
    }

    componentWillMount() {
        this.getUpdateList()

    }

    getUpdateList(){
        api.get('/series').then(res => {
            this.setState({ list: res.data })
            console.log(res)
        }).catch(e => {
            this.toastMessage('Erro ao carregar séries.', 'error')
        })
    }

    salvar(e) {
        e.preventDefault()
        this.toggleBlocking()
        const serie = this.state.serie
        console.log(serie)
        const method = serie._id ? 'put' : 'post'
        const url = serie._id ? `/series/${serie._id}` : '/series'
        api[method](url, serie)
            .then(res => {
                console.log(res)
                if (res.data.success === false) {
                    this.toastMessage('Erro ao salvar série.', 'error')
                    this.toggleBlocking()
                } else {
                    this.toastMessage('Série salva com sucesso.', 'success')
                    console.log(res.data)
                    this.getUpdateList()
                    this.toggleBlocking()
                }
            })
            .catch(e => {
                console.log(e)
                this.toastMessage('Erro ao salvar série.', 'error')
                this.toggleBlocking()
            })

    }
    remove(serieId){

        api.delete(`/series/${serieId}`).then(res => {
      
            console.log('Log Delete >>',res)
            if(res.data.success){
                this.toastMessage('Excluido Com sucesso!','info')
                this.getUpdateList()
            }
            
        }).catch(e => {
            this.toastMessage('Erro ao deletar séries.', 'error')
        })
    }

    handleChange(e) {
        const serie = { ...this.state.serie }   
        const { name, value } = e.target
        serie[name] = value;
        this.setState({serie})
    }

    load(serie) {
        this.setState({ serie })
    }



    renderForm() {
        const serie =  { ...this.state.serie } 
        return (
            <BlockUi tag="div"  className="col-lg-12 mb-5" blocking={this.state.blocking}>
           
                <div className="card">
                    <div className="card-header">
                        <h3 className="h6 text-uppercase mb-0">Basic Form</h3>
                    </div>
                    <div className="card-body">
                        <p>Cadastrar uma nova série</p>
                        <form>
                            <Input 
                                type="text" 
                                name="name" 
                                onChange={e => this.handleChange(e)}
                                label="Nome da séries"
                                placeholder="Nome da séries"
                                value={serie.name}/>

                            <select name="status" className="form-control" onChange={e => this.handleChange(e)}>
                                <option value="to-watch" selected={"to-watch" == serie.status}>Para assistir</option>
                                <option value="watching" selected={"watching" == serie.status}>Assistindo</option>
                                <option value="watched" selected={"watched" == serie.status}>Assistido</option>
                            </select>
                            <div className="form-group">
                                <button onClick={(e) => { this.salvar(e) }} className="btn btn-primary">Salvar!</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            
            </BlockUi>
           
        )
    }

    renderTable() {
        return (
            <div className="col-lg-12 mb-12">
                <div className="card">
                    <div className="card-header">
                        <h6 className="text-uppercase mb-0">Basic Table</h6>
                    </div>
                    <div className="card-body">
                        <table className="table card-text">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Status</th>
                                    <th>Editar</th>
                                    <th>Deletar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRows()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }


    renderRows() {
        return this.state.list.map(serie => {
            return (
                <tr key={serie._id}>
                    <td>{serie.name}</td>
                    <td>{serie.status}</td>
                    <td><button onClick={e => this.load(serie)} className="btn btn-primary">Editar</button></td>
                    <td><button onClick={e => this.remove(serie._id)} className="btn btn-danger">Excluir</button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Fragment>
                {this.renderForm()}
                {this.renderTable()}
                <ToastContainer />
            </Fragment>
        )
    }
}