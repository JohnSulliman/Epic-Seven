import {Component} from "react";
import {Container, Row} from 'react-bootstrap';
import {ItemCard} from './ItemCard';
import {API} from '../../API/API';

//Assents
import loadingImg from '../../Img/loading.svg'

//Styles
import '../../Styles/ReadAll.scss';

export class ReadAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: []
        }
    };

    async componentDidMount() {
        const request = await API.buildAPIGetRequest(API.readAllUrl());
        const items = await request.json();
        const itemsWithImageUrl = items.filter(item => Boolean(item.imageUrl));

        this.setState({
            isLoading: false,
            items: itemsWithImageUrl,
            filteredItems: itemsWithImageUrl,
        })
    };

    //Filtrar itens para a barra de pesquisa
    filterItems = e => {
        const searchValue = e.target.value?.toLowerCase();
        const filteredItems = this.state.items.filter(item => item.name?.toLowerCase().includes(searchValue));

        this.setState({
            filteredItems,
        })
    };

    render() {
        const {isLoading, filteredItems} = this.state;

        if(isLoading) {
            return(
                <Container className='cards'>
                    <Row>
                        <img className="loading" src={loadingImg} alt='' />
                    </Row>
                </Container>
            );
        } else {
            if(filteredItems == false){
                return(
                    <Container className='cards'>
                        <Row>
                            <p className="noData">Não possui personagens cadastrados!</p>
                        </Row>
                    </Container>
                );
            } else {
                return(
                    <Container className='cards'>
                        <Row>
                            {filteredItems.map(item => {
                                return <ItemCard item={item} key={item._id} />
                            })}
                        </Row>
                    </Container>
                );
            };
        };
    };
};