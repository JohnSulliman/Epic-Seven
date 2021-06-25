//Components
import {Component} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {API} from '../../API/API';

export class Update extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.state = {
            isLoading: true,
            item: {}
        }
    };

    //Uma função async verifica se o componente foi montado e faz uma requisição, esperando uma resposta (O item requerido)
    async componentDidMount() {
        const request = await API.buildAPIGetRequest(API.readSingleUrl(this.id))
        const item = await request.json();

        this.setState({
            isLoading: false,
            item
        })
    };

    submitHandler = async event => {
        event.preventDefault();

        const {name,imageUrl, description} = event.target;
        const item = {
            name: name.value,
            imageUrl: imageUrl.value,
            description: description.value
        }

        this.setState({
            isLoading: true,
        })

        const request = await API.buildAPIPutRequest(API.updateSingleUrl(this.id), item).catch(e => {
            console.error('Erro ao tentar atualizar o item selecionado:', e);
        })

        this.setState({
            isLoading: false,
        })

        await request.json();

        this.props.history.push(`/view/${this.id}`)
        
    };

    render() {
        const {item} = this.state;

        return(
            <>
                <h4>Alterar informações</h4>
                <Form className='form' onSubmit={this.submitHandler}>
                    <Form.Group as={Row} controlId='name'>
                        <Form.Label column xs='2' sm='2' md='2' lg='2'>Nome:</Form.Label>
                        <Col xs='10' sm='9' md='9' lg='9'>
                            <Form.Control size='sm' type='text' placeholder='Digite o nome do personagem.' defaultValue={item.name} />
                            <Form.Text className='text-muted'>Esse nome será utilizado na visualização do item na lista.</Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId='imageUrl'>
                        <Form.Label column xs='2' sm='2' md='2' lg='2'>Imagem:</Form.Label>
                        <Col xs='10' sm='9' md='9' lg='9'>
                            <Form.Control size='sm' type='text' placeholder='Digite a URL da imagem.' defaultValue={item.imageUrl} />
                            <Form.Text className='text-muted'>A imagem em questão será exibida na lista de itens.</Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId='description'>
                        <Form.Label column xs='2' sm='2' md='2' lg='2'>Descrição:</Form.Label>
                        <Col xs='10' sm='9' md='9' lg='9'>
                            <Form.Control size='sm' type='text' placeholder='Digite uma descrição.' defaultValue={item.description} />
                            <Form.Text className='text-muted'>Essa descrição será utilizada na visualização do item na lista.</Form.Text>
                        </Col>
                    </Form.Group>

                    <Button variant='primary' type='submit'>Salvar</Button>
                </Form>
            </>
        );
    };
};