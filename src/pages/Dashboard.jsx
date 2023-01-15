import { useContext, useEffect, useState } from "react"
import Avatar, { genConfig } from 'react-nice-avatar'
import { AuthContext } from '../context/AuthContext'
import { useWallet } from '../hooks/useWallet'
import { getAvatar } from '../api/get-avatar'
import { useNavigate } from 'react-router-dom';
import { redirect } from "react-router-dom";


import StatusBar from "../components/dashboard/StatusBar"
import { signOutUser } from "../config/firebase"

const Dashboard = () => {
  const navigate = useNavigate()
  const defaultConfig = genConfig()
  const [config, setConfig] = useState(defaultConfig)
  const { address, getAddress } = useWallet()
  const user = useContext(AuthContext)
  useEffect(() => {
    async function getConfig() {
      if (!address) return getAddress()
      const data = await getAvatar(address)
      setConfig(data)
    }
    getConfig()
  }, [address])

  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-300/50 to-white">
      <div className="max-w-5xl mx-auto flex gap-8 py-12">
        <div>
          <Avatar className="w-64 h-64 rounded-full shadow-2xl" {...config} />
          <h1 className="text-4xl font-bold text-center mt-4">{user?.username}</h1>
        </div>
        <div >
          <StatusBar width="350" done="70" color="#ff912c" label="Happiness" />
          <button onClick={() => {
            if (confirm('Are you sure you want to sign out?')) {
              signOutUser()
              return redirect('/')
            }
          }} className="inline-block py-2 px-4 rounded bg-red-200 text-red-600 ring-1 ring-red-500/30 hover:ring-red-500/50 mr-3">Sign Out</button>
          <button onClick={() => { navigate("/games") }} className="inline-block py-2 px-4 rounded bg-blue-200 text-blue-600 ring-1 ring-blue-500/30 hover:ring-blue-500/50 mr-3">Games</button>
          <span className="py-2.5 px-4 rounded bg-blue-500 text-sky-100">${user?.currency}</span>
        </div>
      </div>
    </main >
  )
}

export default Dashboard