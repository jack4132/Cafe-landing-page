import React, {Component} from 'react';
import { Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component {
    
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(dish) {
        if (dish != null){
            const list = dish.comments.map((comments)=>{

            return(
                    <li key={comments.id} >
                        <p>{comments.comment}</p>
                        <p>--{comments.author},
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                    </li>

                );
            });
        
            return(
                <div><h4>Comments</h4>
                <ul className="list-unstyled">
                    {list}
                </ul>
                </div>
                    
                    
            );
            }
        else
            return(
                <div></div>
            );
    }
    render(){
        return(
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
            );
    }
}
export default DishDetail;