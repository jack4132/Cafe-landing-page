import React from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
 
/* Two ways of declaring function is shown */
//last function contains the first function

function RenderMenuItem({dish,onClick}){
  return(
    <Card >
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>

  );
}

/* This is similar to declaring function as in above. Just replace const with function and use props as function argument just like the former one.*/

const Menu = (props) => { 
      const menu = props.dishes.map((dish) => {
          return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
              <RenderMenuItem dish={dish} />
            </div>
          );
      });

      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Menu</h3>
                <hr />
            </div>                
          </div>
          <div className="row">
            {menu}
          </div>      
        </div>
      );
}

export default Menu;