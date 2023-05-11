import { useState, useEffect } from "react"

export default function Home() {
  const [timer, setTimer] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [timer])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {timer}
    </main>
  )
}
