//Components
import { Component } from "react";
import { Card } from 'react-bootstrap';
import John from '../../Img/John.jpg';

//Styles
import '../../Styles/About.scss';

export class About extends Component {
    render() {
        return(
            <>
                <img className='aboutImg' src={John} />
                <Card>
                    <Card.Body>
                        <Card.Title>Jonathan "Sulliman" Feliciano</Card.Title>
                        <Card.Text>
                            Esse Projeto foi realizado para o módulo 4 de Front-End do curso da Blue-EdTech, dado
                            pela professora Isabella. O trabalho possui a temática de um RPG de turno feito para
                            android e IOS chamado Epic Seven.
                            <p>
                                Meu nome é Jonathan Feliciano, tenho 25 anos e atualmente sou aluno da Blue-EdTech.
                                Sou um amante de jogos, seja para computador, celular ou console. Também gosto de
                                animais e sou apaixonado por música. Sempre tive grande interesse por tecnologia,
                                então decidi, finalmente, me aprofundar nessa área.
                            </p>
                            <p>
                                Bom, acho que é isso! :)
                            </p>
                            <a href='https://github.com/JohnSulliman' target='_blanck'>Acesse meu GitHub!</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    };
};