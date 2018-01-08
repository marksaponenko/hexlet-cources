Реализуйте компонент <Collapse>, который по клику на ссылке отображает
свое содержимое и при повторном - прячет. Содержимое передается в компонент
через свойство text. За начальное состояние открытости, отвечает свойство
opened, которое по умолчанию равно false.

import cn from 'classnames'; // eslint-disable-line
import React from 'react'; // eslint-disable-line

export default class Collapse extends React.Component {
   state = {opened: false};
   onClick = () => {
     const opened = this.state.opened
     this.setState({opened: !opened});
   }

   render() {
     const buttonClass = {
       collapse: true,
       show: this.state.opened,
     }
     return <div>
              <p>
                <a className="btn btn-primary" href="#" onClick={this.onClick}>Link with href</a>
              </p>
            <div className={cn(buttonClass)}>
              <div className="card card-body">
              {this.props.text}
              </div>
            </div>
          </div>
   }
}
