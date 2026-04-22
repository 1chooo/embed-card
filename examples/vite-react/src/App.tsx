import { EmbedCard } from "embed-card"

const DEMO_URL =
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ" as const

const DEMO_THEME = {
  accentColor: "#e11d48",
  borderColor: "rgba(225,29,72,0.18)",
  radius: 28,
  shadow: "0 28px 100px rgba(225,29,72,0.14)",
} as const

export default function App() {
  return (
    <main className="demo">
      <p className="eyebrow">embed-card · Vite + React</p>
      <h1>Turn a URL into a rich embed</h1>
      <p className="lede">
        This app imports <code>EmbedCard</code> from <code>embed-card</code>.
        Swap <code>DEMO_URL</code> for your own link.
      </p>
      <EmbedCard theme={DEMO_THEME} url={DEMO_URL} />
    </main>
  )
}
