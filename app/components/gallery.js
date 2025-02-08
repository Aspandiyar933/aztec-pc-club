"use client"
import { ParallaxScroll } from "../components/ui/parallax-scroll"

export default function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />
}

const images = [
  "https://framerusercontent.com/images/PzQ6RiNApDJQH51mCwQISR8diQ.jpg?scale-down-to=2048",
  "https://framerusercontent.com/images/ou5YjcoULXgiKWco3uAVOlDMGpk.jpg?scale-down-to=512",
  "/r.jpeg",
  "/bla.jpeg",
  "/a.jpeg",
  "/b.jpeg",
  "/c.jpeg",
  "/d.jpeg",
  "/e.jpeg"
]

