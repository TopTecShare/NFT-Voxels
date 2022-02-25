import voxels from "../img/Main Cube.png"

import "../styles/home.css"

export default function () {
  const cubeAnimation = () => {
    document.getElementById("cube").style.transform = "scale(1.2, 1.2)"
    document.getElementById("cube").style.transition = "0.5s ease-in-out"
    setTimeout(() => {
      document.getElementById("cube").style.transform = "scale(1, 1)"
      document.getElementById("cube").style.transition = "0.5s ease-in-out"
    }, 500)
  }

  // const btn1 = document.getElementById("cube").value
  // new HoverButton(btn1)

  return (
    <div onClick={cubeAnimation} className="hover-cube" id="cube">
      <img src={voxels} />
    </div>
  )
}

// class HoverButton {
//   constructor(el) {
//     this.el = el
//     this.hover = false
//     this.calculatePosition()
//     this.attachEventsListener()
//   }

//   attachEventsListener() {
//     window.addEventListener("mousemove", (e) => this.onMouseMove(e))
//     window.addEventListener("resize", (e) => this.calculatePosition(e))
//   }

//   calculatePosition() {
//     gsap.set(this.el, {
//       x: 0,
//       y: 0,
//       scale: 1,
//     })
//     const box = this.el.getBoundingClientRect()
//     this.x = box.left + box.width * 0.5
//     this.y = box.top + box.height * 0.5
//     this.width = box.width
//     this.height = box.height
//   }

//   onMouseMove(e) {
//     let hover = false
//     let hoverArea = this.hover ? 0.7 : 0.5
//     let x = e.clientX - this.x
//     let y = e.clientY - this.y
//     let distance = Math.sqrt(x * x + y * y)
//     if (distance < this.width * hoverArea) {
//       hover = true
//       if (!this.hover) {
//         this.hover = true
//       }
//       this.onHover(e.clientX, e.clientY)
//     }

//     if (!hover && this.hover) {
//       this.onLeave()
//       this.hover = false
//     }
//   }

//   onHover(x, y) {
//     gsap.to(this.el, {
//       x: (x - this.x) * 0.4,
//       y: (y - this.y) * 0.4,
//       scale: 1.15,
//       ease: "power2.out",
//       duration: 0.4,
//     })
//     this.el.style.zIndex = 10
//   }
//   onLeave() {
//     gsap.to(this.el, {
//       x: 0,
//       y: 0,
//       scale: 1,
//       ease: "elastic.out(1.2, 0.4)",
//       duration: 0.7,
//     })
//     this.el.style.zIndex = 1
//   }
// }
