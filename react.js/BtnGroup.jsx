Реализуйте компонент BtnGroup, который отрисовывает две кнопки. Нажатие на любую
из кнопок делает ее активной, а другую неактивной. При первой загрузке ни одна из кнопок не нажата.

Пример использования:

<BtnGroup />

Результат:

<div class="btn-group" role="group">
  <button type="button" class="btn btn-secondary left">Left</button>
  <button type="button" class="btn btn-secondary right">Right</button>
</div>

После нажатия на левую кнопку, добавляется класс active. В результате список классов выглядит так: btn btn-secondary left active. У правой кнопки поведение соответствующее.

import cn from 'classnames'; // eslint-disable-line
import _ from 'lodash'; // eslint-disable-line
import React from 'react'; // eslint-disable-line

export default class BtnGroup extends React.Component {
  state = {active: null};
  setActive =(active) => {
    this.setState({active})
  }
  setActiveLeft = () => this.setActive('left');
  setActiveRight = () => this.setActive('right')
  render() {
    const leftBtnClass = {
      btn: true,
      'btn-secondary': true,
      left: true,
      active: this.state.active === "left",
    }
    const rightBtnClass = {
      btn: true,
      'btn-secondary': true,
      right: true,
      active: this.state.active === "right",
    }
     return <div className="btn-group" role="group">
       <button type="button" className={cn(leftBtnClass)} onClick={this.setActiveLeft}>Left</button>
       <button type="button" className={cn(rightBtnClass)} onClick={this.setActiveRight}>Right</button>
     </div>
  }
}

ReactDOM.render(
  <BtnGroup />,
  document.getElementById('container'),
);
