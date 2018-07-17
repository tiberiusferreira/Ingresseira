import {Component, Fragment} from "react";
import * as React from "react";
import {IEvent} from "../redux/interfaces";


class EventBanner extends Component<{event: IEvent, onClick: (eventTitle: number) => void}, {}> {
    constructor(props: {event: IEvent, onClick: (eventTitle: number) => void}) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    public render() {
        return (
            <Fragment>
                <div onClick={this.handleClick} className={this.getEventContainerClass()}>
                    <div className={"event-detail"}>
                        <h2>{this.props.event.title}</h2>
                        <h3>Sab 30 de Jun</h3>
                        <h4>Campinas Hall</h4>
                        <h4>Venda: Bandejao UNICAMP, Casa da Tia Rita</h4>
                    </div>
                    <img className={"event-img"} src="sample_1.jpg" alt="Paris"/>
                    <div hidden={!(this.getEventContainerClass() === "expanded-event-container")} className={"expanded-event-details"}>
                        <span>ADIVINHA, DOUTOR, QUEM TÁ DE VOLTA NA PRAÇA?</span>
                        <br/>
                        <br/>
                        <span>Pra mantermos a tradição, esse ano, a pós-JUCA da Gariloucura será uma Ex-Quadrilha do jeito que a gente gosta: regada à fumaça, conhaque e muuuuita cerveja. Motivos para comemorar não faltam, e o principal deles é o de ter a bancada mais foda do JUCA 2018.</span>
                        <span>Por isso, geral tá convidado para essa jorração com a Garizada em clima de uma festança junina, cheia de arruaça, goró, fogueira e tudo que tivermos direito!</span>
                        <br/>
                        <br/>
                        <span>OPEN BAR:</span>
                        <span>+ CERVEJA</span>
                        <span>+ ESPANCA ❤</span>
                        <span>+ BOOM SURPRESA</span>
                        <br/>
                        <br/>
                        <span>LINE UP:</span>
                        <span>(Em breve)</span>
                        <br/>
                        <br/>
                        <span>VALOR: R$ 35,00</span>
                        <br/>
                        <br/>
                        <span>*INGRESSOS LIMITADOS*</span>
                        <span>Comprem antecipado para não ficar sem entrar, seus mongolão. Não haverá venda na porta do Suprinha.</span>
                        <br/>
                        <br/>
                        <span>"SOY METOLOCO E VIM PARA VER</span>
                        <span>O TSUNAMI LARANJA PASSAR.</span>
                        <span>CHEGA MAIS, CALDEIRÃO VAI FERVER!"</span>
                    </div>
                </div>
            </Fragment>
        );
    }

    private handleClick() {
        this.props.onClick(this.props.event.id)
    }

    private getEventContainerClass(): string{
        return this.props.event.toggled ? "expanded-event-container" : "event-container"
    }

}




export default EventBanner;
​

