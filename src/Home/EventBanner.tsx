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
                        <h3>{this.props.event.date}</h3>
                        <h4>{this.props.event.place}</h4>
                        <h4>{this.props.event.sales_place}</h4>
                        <h2>R$ {this.props.event.price}</h2>
                    </div>
                    <img className={"event-img"} src={this.props.event.image_url} alt={this.props.event.image_alt}/>
                    <div hidden={!(this.getEventContainerClass() === "expanded-event-container")} className={"expanded-event-details"}>
                        {
                            this.props.event.description.split("\n")
                                .map((text,i) => {
                                        return <div key={i}>{text}</div>;
                                    }
                                )
                        }
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

