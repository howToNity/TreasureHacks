import Card from "../components/games/Card"

export default function Games() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-200/80 to-white">
      <div className="max-w-5xl mx-auto px-4 py-24 grid grid-cols-3">
        <Card name="Tic-Tac-Toe" img="https://bit.ly/3GP869k" link="/games/tictactoe" />
      </div>
    </main>
  )
}