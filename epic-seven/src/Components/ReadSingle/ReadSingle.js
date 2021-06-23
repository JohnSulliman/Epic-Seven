import { Component  } from "react";
import { Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { API } from '../../API/API';
import '../../Styles/ReadSingle.scss';

export class ReadSingle extends Component {

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.state = {
            isLoading: true,
            item: {}
        }
    }

    async componentDidMount() {
        const request = await API.buildAPIGetRequest(API.readSingleUrl(this.id))
        const item = await request.json();

        this.setState({
            isLoading: false,
            item
        })
    }

    render() {
        const { item } = this.state;

        return(
            <> 
                <Form>
                    <img className='form-img' src={item.imageUrl} alt={item.name}/>
                    <Form.Group>
                        <Form.Label className='form-name'><strong>{item.name}</strong></Form.Label>
                        <Form.Text className='form-info'>{item.description}</Form.Text>
                    </Form.Group>
                </Form>
                <Link className='btn btn-info' to={'/update/' + item._id}>Editar</Link>
                <Link className='btn btn-danger' to={'/delete/' + item._id}>Excluir</Link>
            </>
        );
    }
}