import React from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle } from 'reactstrap';
 
/* Two ways of declaring function is shown */
//last function contains the first function

function RenderMenuItem({dish,onClick}){
  return(
    <Card  onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>

  );
}

/* This is similar to declaring function as in above. Just replace const with function and use props as function argument just like the former one.*/

const Menu = (props) => { 
      const menu = props.dishes.map((dish) => {
          return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
              <RenderMenuItem dish={dish} onClick={props.onClick}/>
            </div>
          );
      });

      return (
        <div className="container">
          <div className="row">
              {menu}
          </div>      
        </div>
      );
}

export default Menu;