import cn from 'classnames'; // eslint-disable-line
import _ from 'lodash'; // eslint-disable-line
import React from 'react'; // eslint-disable-line

export default class Carousel extends React.Component {
   state = { count: 0 };
   setNewCount = (num) => {
     const newCount = this.state.count + num;
     if (newCount < 0) {
       return this.setState({ count: 2 });
     }
     if (newCount > 2) {
       return this.setState({ count: 0 });
     }

     return this.setState({ count: newCount });
   }


   renderImage() {
     return this.props.images.map((item, index) => {
       const imageClass = {
         'carousel-item': true,
         active: this.state.count === index,
       };
       return <div key={index} className={cn(imageClass)}><img className="d-block w-100" src={item}/></div>;
     });
   }

   render() {
     const images = this.props.images;
     return <div className="carousel slide" data-ride="carousel">
       <div className="carousel-inner">
         {this.renderImage()}
       </div>
       <a className="carousel-control-prev" href="#" role="button" data-slide="prev" onClick={() => this.setNewCount(-1)}>
         <span className="carousel-control-prev-icon"></span>
         <span className="sr-only">Previous</span>
       </a>
       <a className="carousel-control-next" href="#" role="button" data-slide="next" onClick={() => this.setNewCount(1)}>
         <span className="carousel-control-next-icon"></span>
         <span className="sr-only">Next</span>
       </a>
     </div>;
   }
}
