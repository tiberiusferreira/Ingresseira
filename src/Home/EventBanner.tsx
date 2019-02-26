import {Component, Fragment} from "react";
import * as React from "react";
import {IEvent} from "../redux/interfaces";


class EventBanner extends Component<{event: IEvent, onEventClicked: (eventTitle: number) => void,
    onSaveClicked: (eventTitle: number) => void}, {}> {
    constructor(props: {event: IEvent, onEventClicked: (eventTitle: number) => void,
        onSaveClicked: (eventTitle: number) => void}) {
        super(props);
        this.toggleEvent = this.toggleEvent.bind(this);
        this.toggleSave = this.toggleSave.bind(this);
    }
    public render() {
        return (
            <Fragment>
                <div className={"event-container"}>
                    <div onClick={this.toggleEvent}  className={"event-summary-container"}>
                        <div className={"event-summary-title"}>{this.props.event.title} </div>
                        <div className={"event-summary-date"}>{this.props.event.date} </div>
                        <div className={"event-summary-place"}>{this.props.event.place} </div>
                        <div className={"event-summary-sales-place"}>{this.props.event.sales_place} </div>
                        <div className={"event-summary-price"}>{"R$" + this.props.event.price} </div>
                    </div>
                    <img onClick={this.toggleEvent} className={"event-img"} src={this.props.event.image_url} alt={this.props.event.image_alt}/>
                    <div className={"event-details"} style={{display: this.props.event.toggled ? 'block' : 'none'}}>
                        {
                            this.props.event.description.split("\n")
                                .map((text,i) => {
                                        return <div key={i}>{text}</div>;
                                    }
                                )
                        }
                        <div onClick={this.toggleSave} className={"event-posts-container-save-button"}
                             style={{backgroundColor: this.props.event.saved ? '#7cfc004d' : "#0000001a"}}>
                            <div className={"event-posts-container-save-button-text"}>
                                {this.props.event.saved ? "Salvo" : "Salvar"}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    private toggleEvent() {
        this.props.onEventClicked(this.props.event.id);
    }

    private toggleSave() {
        this.props.onSaveClicked(this.props.event.id)
    }

}




export default EventBanner;