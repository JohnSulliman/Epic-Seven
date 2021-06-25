//Components
import { Component } from "react";
import { Form, Button, Col, Row } from 'react-bootstrap';
import { API } from '../../API/API';

//Styles
import '../../Styles/Create.scss'

export class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    };

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
    };

    render() {
        return(
           <>
                <h4>Adicionar Personagens</h4>
                <Form className='form' onSubmit={this.submitHandler}>
                    <Form.Group as={Row} controlId='name'>
                        <Form.Label className='info' column xs='3' sm='2' md='2' lg='2'>Nome:</Form.Label>
                        <Col xs='9' sm='9' md='9' lg='9'>
                            <Form.Control size='sm' type='text' placeholder='Digite o nome do personagem.' />
                            <Form.Text className='text-muted'>Esse nome será utilizado na visualização do item na lista.</Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId='imageUrl'>
                        <Form.Label className='info' column xs='3' sm='2' md='2' lg='2'>Imagem:</Form.Label>
                        <Col xs='9' sm='9' md='9' lg='9'>
                            <Form.Control size='sm' type='text' placeholder='Digite a URL da imagem.' />
                            <Form.Text className='text-muted'>A imagem em questão será exibida na lista de itens.</Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId='description'>
                        <Form.Label className='info' column xs='3' sm='2' md='2' lg='2'>Descrição:</Form.Label>
                        <Col xs='9' sm='9' md='9' lg='9'>
                            <Form.Control size='sm' type='text' placeholder='Digite uma descrição.' />
                            <Form.Text className='text-muted'>Essa descrição será utilizada na visualização do item na lista.</Form.Text>
                        </Col>
                    </Form.Group>

                    <Button variant='primary' type='submit'>Salvar</Button>
                </Form>
           </>
        );
    };

};