import React, { Component } from "react";

class FrzContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  transX = () => {
    let row = document.querySelectorAll(".row");
    let { preTrans, translate } = this.props.transX;

    preTrans = Math.round(preTrans);
    translate = Math.round(translate);
    row.forEach(el => {
      el.classList.remove(`transX_${preTrans}`);

      el.classList.add(`transX_${translate}`);
    });
  };
  targetHandler = e => {
    let col = document.querySelectorAll(".col");
    let tar = e.target;
    let tarParent = tar.parentElement;
    col.forEach(self => {
      self.classList.remove("active", "interchange");
    });
    if (!tar.classList.contains("col")) {
      let name = tarParent.classList[1];
      console.log(tarParent);
      document.querySelectorAll(`.${name}`).forEach(self => {
        self.classList.add("interchange");
      });
      tarParent.classList.add("active");
      tarParent.parentElement.childNodes.forEach(self => {
        self.classList.add("interchange");
      });
    } else if (tar.classList.contains("col")) {
      console.log(tar);
      let name = tar.classList[1];
      document.querySelectorAll(`.${name}`).forEach(self => {
        self.classList.add("interchange");
      });
      tar.classList.add("active");
      tarParent.childNodes.forEach(self => {
        self.classList.add("interchange");
      });
    }
  };

  componentDidMount() {
    let cols = document.querySelectorAll(".col");
    cols.forEach(col => {
      col.addEventListener("click", this.targetHandler);
    });
    let rows = document.querySelectorAll(".row");
    rows.forEach(row => {
      row.classList.add(`speed_${this.props.time * 10}`);
    });
  }

  componentDidUpdate() {
    this.transX();
  }
  render() {
    return (
      <div className="frz_content">
        <div className="top_date row">
          <div className="date2">
            <span>12/27(一)</span>
          </div>
          <div className="date2">
            <span>12/28(二)</span>
          </div>
          <div className="date2">
            <span>12/29(三)</span>
          </div>
          <div className="date2">
            <span>12/30(四)</span>
          </div>
          <div className="date2">
            <span>12/31(五)</span>
          </div>
          <div className="date2 new_year">
            <span>01/01(六)</span>
          </div>
          <div className="date2">
            <span>01/02(日)</span>
          </div>
        </div>
        <div className="row">
          <div className="col col1">
            <span>— —</span>
          </div>
          <div className="col col2 cheapest">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col3">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col4">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col5">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col6">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col7">
            <span className="up">$15,568</span>起
          </div>
        </div>
        <div className="row">
          <div className="col col1">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col2">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col3">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col4">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col5 cheapest">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col6">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col7">
            <span className="up">$15,568</span>起
          </div>
        </div>
        <div className="row">
          <div className="col col1">
            <span>查看</span>
          </div>
          <div className="col col2">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col3">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col4">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col5">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col6">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col7">
            <span className="up">$15,568</span>起
          </div>
        </div>
        <div className="row">
          <div className="col col1">
            <span>查看</span>
          </div>
          <div className="col col2">
            <span>查看</span>
          </div>
          <div className="col col3">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col4 cheapest">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col5">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col6">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col7">
            <span className="up">$15,568</span>起
          </div>
        </div>
        <div className="row">
          <div className="col col1">
            <span>查看</span>
          </div>
          <div className="col col2">
            <span>查看</span>
          </div>
          <div className="col col3">
            <span>查看</span>
          </div>
          <div className="col col4">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col5">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col6">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col7">
            <span className="up">$15,568</span>起
          </div>
        </div>
        <div className="row">
          <div className="col col1">
            <span>查看</span>
          </div>
          <div className="col col2">
            <span>查看</span>
          </div>
          <div className="col col3">
            <span>查看</span>
          </div>
          <div className="col col4">
            <span>查看</span>
          </div>
          <div className="col col5">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col6">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col7">
            <span className="up">$15,568</span>起
          </div>
        </div>
        <div className="row">
          <div className="col col1">
            <span>查看</span>
          </div>
          <div className="col col2">
            <span>查看</span>
          </div>
          <div className="col col3">
            <span>查看</span>
          </div>
          <div className="col col4">
            <span>查看</span>
          </div>
          <div className="col col5">
            <span>查看</span>
          </div>
          <div className="col col6">
            <span className="up">$15,568</span>起
          </div>
          <div className="col col7">
            <span className="up">$15,568</span>起
          </div>
        </div>
      </div>
    );
  }
}

export default FrzContent;
