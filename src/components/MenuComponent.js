import React , {  Component } from 'react' ;
import { Media,Card , CardImg , CardImgOverlay, CardText , CardTitle, CardBody} from 'reactstrap';
import { DISHES }   from '../shared/dishes';

class Menu extends Component {

    constructor (props) {
        super (props);
        this.state= {
           selectedDish: null
        };
    }

    componentDidMount(){
        console.log('menu Component componentDidMount is invoked');

    }

    renderDish(dish){
        if(dish!= null){
            return(
                <Card>
                <CardImg  top  src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle > {dish.name}</CardTitle >
                    <CardText> {dish.description }</CardText>
                </CardBody>
                </Card>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
    onDishSelect (dish){
        this.setState({selectedDish: dish});
    }
   
    render () {
       const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                            <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
                            <CardImgOverlay>
                            <CardTitle > {dish.name}</CardTitle >
                             
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        }) ;


        return (
            <div className="container">
                <div className="row">
                   
                       {menu}
                   
                </div>
             <div className= "container">
                <div className="row">
                   {this.renderDish(this.state.selectedDish)}
               </div>
             </div>
            </div>
        );
    };
}

export default Menu ;