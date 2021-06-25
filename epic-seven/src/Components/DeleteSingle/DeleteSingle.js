import {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
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
            <Card>
                <Card.Body>
                    <Card.Title>Excluir Item</Card.Title>

                    <Card.Text>
                        Tem certeza que deseja excluir o item selecionado?
                    </Card.Text>
                    <Button className='btn' variant='danger' onClick={this.clickHandler}>Excluir</Button>
                    <Button className='btn' variant='primary' onClick={this.goToView}>Cancelar</Button>
                </Card.Body>
            </Card>
        );
    };
};