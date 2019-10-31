import React, { Component } from "react";
import FrzContent from "./FrzContent.js";
import "./FrzTable.css";

class FrzTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translate: 0,
      preTrans: null
    };
  }

  slideLeft = e => {
    const { slide, show } = this.props.setting.count;
    let transStart = 0;
    let transEnd = -(1 / show) * show * 100;
    transStart += this.state.translate + (slide / show) * 100;
    transEnd += this.state.translate + (slide / show) * 100;
    if (transStart > 0) {
      transStart = 0;
      transEnd = -(1 / show) * show * 100;
    }
    this.setState(() => ({
      preTrans: this.state.translate,
      translate: transStart
    }));
  };

  slideRight = e => {
    const { slide, show } = this.props.setting.count;
    let transStart = 0;
    let transEnd = -(1 / show) * show * 100;
    transStart = this.state.translate - (slide / show) * 100;
    transEnd += this.state.translate - (slide / show) * 100;
    if (transEnd < -(1 / show) * 700) {
      transEnd = -(1 / show) * 700;
      transStart = (1 / show) * (100 * show - 700);
    }
    this.setState(() => ({
      preTrans: this.state.translate,
      translate: transStart
    }));
  };

  resizeHandler = () => {
    if (window.screen.availWidth > 768) {
      this.setState({ preTrans: this.state.translate, translate: 0 });
    }
  };

  componentDidMount() {
    let show = this.props.setting.count.show;
    let frz_main = document.querySelector(".frz_main");
    let slide_btn_left = document.querySelector(".slide_btn_left");
    let slide_btn_right = document.querySelector(".slide_btn_right");
    switch (show) {
      case 1:
        frz_main.classList.add("show_1");
        slide_btn_left.classList.add("none");
        break;
      case 2:
        frz_main.classList.add("show_2");
        slide_btn_left.classList.add("none");
        break;
      case 3:
        frz_main.classList.add("show_3");
        slide_btn_left.classList.add("none");
        break;
      case 4:
        frz_main.classList.add("show_4");
        slide_btn_left.classList.add("none");
        break;
      case 5:
        frz_main.classList.add("show_5");
        slide_btn_left.classList.add("none");
        break;
      case 6:
        frz_main.classList.add("show_6");
        slide_btn_left.classList.add("none");
        break;
      case 7:
        slide_btn_left.classList.add("none");
        slide_btn_right.classList.add("none");
        break;
      default:
        slide_btn_left.classList.add("none");
        break;
    }
    window.addEventListener("resize", this.resizeHandler);
  }
  componentDidUpdate() {
    let slide_btn_left = document.querySelector(".slide_btn_left");
    let slide_btn_right = document.querySelector(".slide_btn_right");
    const { show } = this.props.setting.count;
    if (this.state.translate !== 0) {
      slide_btn_left.classList.remove("none");
    } else {
      slide_btn_left.classList.add("none");
    }
    if (this.state.translate === (1 / show) * (100 * show - 700)) {
      slide_btn_right.classList.add("none");
    } else {
      slide_btn_right.classList.remove("none");
    }
  }

  render() {
    return (
      <div className="frz_container">
        <div className="slide_btn slide_btn_left" onClick={this.slideLeft}>
          <i className="icon"> &#x2039;</i>
        </div>
        <div className="slide_btn slide_btn_right" onClick={this.slideRight}>
          <i className="icon"> &#x203A;</i>
        </div>
        <div className="frz_main">
          <div className="title">
            <span>回程</span>
            <span>去程</span>
          </div>
          <div className="left_date">
            <div className="date">
              <span>12/27(一)</span>
            </div>
            <div className="date">
              <span>12/28(二)</span>
            </div>
            <div className="date">
              <span>12/29(三)</span>
            </div>
            <div className="date">
              <span>12/30(四)</span>
            </div>
            <div className="date">
              <span>12/31(五)</span>
            </div>
            <div className="date new_year">
              <span>01/01(六)</span>
            </div>
            <div className="date">
              <span>01/02(日)</span>
            </div>
          </div>
          <FrzContent transX={this.state} time={this.props.setting.speed} />
        </div>
      </div>
    );
  }
}
FrzTable.defaultProps = {
  setting: {
    count: {
      // M版時每次點擊往前往後移動幾格儲存格
      slide: 1, // [number]
      // M版時一個畫面show幾格儲存格
      show: 4 // [number]
    },
    // 設定花多久時間移動完成
    speed: 0.3, // [number]
    // 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
    whenClick: function($element) {
      // console.log($element)
    }
  }
};

export default FrzTable;
