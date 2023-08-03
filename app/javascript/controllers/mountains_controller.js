import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="mountains"
export default class extends Controller {
  static targets = ["parallax"]

  connect() {
    console.log("Stimulus mountains is in the House!")
    // let xValue = 0;
    // let yValue = 0;
    // window.addEventListener("mousemove", (e) => {
    //   updateMouse(e);
    // })
  }

  updateMouse(event) {
    // Access the mouse coordinates from the event
    const mouseX = event.clientX - window.innerWidth / 2;
    const mouseY = event.clientY - window.innerHeight / 2;

    // Perform some action based on the mouse coordinates
    console.log("Mouse X:", mouseX, "Mouse Y:", mouseY);
    this.parallaxing(mouseX,  mouseY);
  }

  parallaxing(mouseX,  mouseY){
    // console.log(this.parallaxTargets)
    // this.parallaxTargets.style.display="none";
    this.parallaxTargets.forEach((element) => {
      // Perform some action on each target element
      element.style.transform = `translateX(calc(-50% + ${mouseX}px)) translateY(calc(-50% + ${mouseY}px))`;
    });
  }
}
