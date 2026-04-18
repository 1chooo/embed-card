import { registerEmbedCard } from "embed-card/web-component"

registerEmbedCard()

const host = document.querySelector("#embed-host")

if (host) {
  host.innerHTML = `
    <embed-card
      url="https://www.reddit.com/r/reactjs/comments/1bz9yqv/what_are_you_building_with_react_this_week/"
      accent-color="#ff4500"
    ></embed-card>
  `
}
