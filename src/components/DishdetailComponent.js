import React from 'react';
import { Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';

function RenderDish({dish}) {
        if (dish != null)
            return(
                <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                
            );
        else
            return(
                <div></div>
            );
    }
 function RenderComments({dish}) {
        if (dish != null){
            let list = dish.comments.map((comment)=>{
            return(
                <li key={comment.id} >
                    <p>{comment.comment}</p>
                    <p>--{comment.author},
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            
                );
            });
        
            return(
                <div  className="col-12 col-md-5 m-1">
                    <div><h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>
                    </div>
                </div>
                    
                    
            );
            }
        else
            return(
                <div></div>
            );
    }
const DishDetail = (props) => {
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.selectedDish}/>
                    <RenderComments dish={props.selectedDish}/>    
                </div>
            </div>
            );
}
export default DishDetail;