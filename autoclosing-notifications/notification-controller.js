// Author: Lucian Ghinda (dev@ghinda.com)

import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ "progress" ]

  connect() {
    this.startTimer(10);
    this.startProgress(10, 10, this.progressTarget.id);
  }

  startTimer(seconds){
    let element_id = this.element.id;
    let that = this; // being extra carreful with _this_
    setTimeout(() => that.hideNotification(element_id), seconds * 1000)
  }

  hideNotification(elem_id){
    let element = document.querySelector("#" + elem_id);

    if (element) {
      element.parentElement.removeChild(element);
    }
  }

  startProgress(totalSeconds, currentSecond, targetId){
    let that = this; // being extra carreful with _this_
    let targetBar = document.querySelector("#" + targetId);
    let remaining = Math.round( (currentSecond * 100) / totalSeconds ) ;
    targetBar.style.width = remaining + "%";
    if (currentSecond > 1) {
      setTimeout(() => that.startProgress(totalSeconds, currentSecond - 1, targetId), 1000);
    }
  }
}