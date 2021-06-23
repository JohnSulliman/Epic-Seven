import { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import { API } from '../../API/API';
import '../../Styles/Create.scss'

export class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    submitHandler = async event => {
        event.preventDefault();

        const {name, imageUrl, description} = event.target;
        const item = {
            name: name.value,
            imageUrl: imageUrl.value,
            description: description.value,
        }

        this.setState({
            isLoading: true,
        })

        const request =  await API.buildAPIPostRequest(API.createUrl(),item).catch(e =>{
            console.error("Erro ao tentar adicionar um item ao banco de dados:", e);
        })

        this.setState({
            isLoading: false,
        })

        const result = await request.json();
        const id = result._id;

        this.props.history.push(`/view/${id}`)
    }

    render() {
        return(
           <>
                <h2>Adicionar Personagens.</h2>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type='text' placeholder='Digite o nome do personagem.' />
                        <Form.Text className='text-muted'>Esse nome será utilizado na visualização do item na lista.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='imageUrl'>
                        <Form.Label>URL da Imagem</Form.Label>
                        <Form.Control type='text' placeholder='Digite a URL da imagem.' />
                        <Form.Text className='text-muted'>A imagem em questão será exibida na lista de itens.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='description'>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control type='text' placeholder='Digite uma descrição.' />
                        <Form.Text className='text-muted'>Essa descrição será utilizada na visualização do item na lista.</Form.Text>
                    </Form.Group>

                    <Button variant='primary' type='submit'>Salvar</Button>
                </Form>
           </>
        );
    }

}