import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scroll"
export default class extends Controller {
  static targets = ["creditcard"] // Use "creditcard" instead of "creditCard"

  connect() {
    console.log("Stimulus scroll is in the house!");
    this.dragging = false;
    this.elLength = this.creditcardTarget.style.length;
    this.elHeight = this.creditcardTarget.style.height;
    this.posElX = this.creditcardTarget.offsetLeft;
    this.posElY = this.creditcardTarget.offsetTop;

  }

  dragOn() {
    this.dragging = true;
  }

  dragOff() {
    this.dragging = false;
  }

  dragElement(event) {
    var posEventX = event.clientX;
    var posEventY = event.clientY;
    if (this.dragging === true) {
      var offsetElX = posEventX - 150;
      var offsetElY = posEventY - 100;
      console.log(offsetElX);
      this.creditcardTarget.style.left = `${offsetElX}px`;
      this.creditcardTarget.style.top = `${offsetElY}px`;
      console.log(this.creditcardTarget.style.top)
    }
  }
}
