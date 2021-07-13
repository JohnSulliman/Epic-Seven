import {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import FormFileLabel from 'react-bootstrap/esm/FormFileLabel';
import {API} from '../../API/API'

//Styles
import '../../Styles/DeleteSingle.scss';

export class DeleteSingle extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;   
        this.state = {
            isLoading: false,
        }

    };

    clickHandler = async event => {
        event.preventDefault();

        this.setState({
            isLoading: true,
        })

        await API.buildAPIDeleteRequest(API.deleteSingleUrl(this.id)).catch(e => {
            console.error("Não foi possível deletar o item selecionado:", e);
        })

        this.setState({
            isLoading: false,
        })

        this.goToHome();
    };

    goToHome = () => {
        this.props.history.push(`/`);
    };

    goToView = () => {
        this.props.history.push(`/view/${this.id}`);
    };

    render() {
        return(
            <Form>
                <Form.Group>
                    <h4>Excluir Item</h4>
                    <Form.Label>
                        Tem certeza que deseja excluir o item selecionado?
                        Essa ação não poderá ser revertida!
                    </Form.Label>
                </Form.Group>
                <Button className='btn' variant='danger' onClick={this.clickHandler}>Excluir</Button>
                <Button className='btn' variant='primary' onClick={this.goToView}>Cancelar</Button>
            </Form>
        );
    };
};