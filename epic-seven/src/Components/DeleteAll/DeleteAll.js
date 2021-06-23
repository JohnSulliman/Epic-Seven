import { Component } from "react";
import {Form, Button } from 'react-bootstrap';
import { API } from '../../API/API';
import '../../Styles/DeleteAll.scss'

export class DeleteAll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    clickHandler = async event => {
        event.preventDefault();

        this.setState({
            isLoading: true,
        })

        await API.buildAPIDeleteRequest(API.deleteAllUrl()).catch(e => {
            console.error("Erro ao tentar deletar todos os itens do banco de dados:", e);
        })

        this.setState({
            isLoading: false,
        })

        this.goToHome()
    }

    goToHome = () => {
        this.props.history.push('/')
    }

    render() {
        return(
            <Form>
                <Form.Group>
                    <h2>Excluir</h2>
                    <Form.Label>
                        Tem certeza que deseja excluir todos os itens do banco de dados?
                        Essa ação não poderá ser revertida!
                    </Form.Label>
                </Form.Group>

                <Button className='btn' variant='danger' onClick={this.clickHandler}>Excluir</Button>
                <Button className='btn' variant='primary' onClick={this.goToHome}>Cancelar</Button>
            </Form>
        );
    }

}