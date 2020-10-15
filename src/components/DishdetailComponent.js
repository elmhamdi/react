import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardFooter } from 'reactstrap';

function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

class DishDetail extends Component {
    constructor(props) {
        super(props);

    }


    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
    renderComment(comments)
    {
        if(comments != null) {
            const myComments= comments.map((comm) => {
                return (
                    <div>
                        <ul className="list-unstyled">
                            <li className="col-12 mb-3">{comm.comment}</li>
                            <li className="col-12 mb-3">--{comm.author}, {formatDate(comm.date)}</li>
                        </ul>
                    </div>

            );
            });
            return (
               <div>
                   <h4>Comments</h4>
                   {myComments}
               </div>
            );
        }
        else
        {
            return (
                <div></div>
            );
        }
    }

    render() {
        if(this.props.selectedDish == null)
        {
            return (
                <div></div>
            );
        }
        else {
            return(

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComment(this.props.selectedDish.comments)}
                    </div>
                </div>
            );
        }

    }
}

export default DishDetail;