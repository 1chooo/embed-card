import { registerEmbedCard } from "embed-card/web-component"

registerEmbedCard()

const host = document.querySelector("#embed-host")

if (host) {
  host.innerHTML = `
    <embed-card
      url="https://www.reddit.com/r/github/comments/1j6jga7/i_rebuilt_my_personal_portfolio_using_nextjsits/"
      accent-color="#ff4500"
    ></embed-card>
  `
}
