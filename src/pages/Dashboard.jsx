import { useEffect, useState } from "react"
import Avatar from 'react-nice-avatar'

const Dashboard = () => {
  const [config, setConfig] = useState({});

  useEffect(() => {
    if (
      !JSON.parse(localStorage.getItem("user"))?.avatar
    ) {
      setConfig(JSON.parse(localStorage.getItem("avatar")))
    } else {it 
      setConfig(JSON.parse(localStorage.getItem("user")).avatar)
    }
  }, [])

  return (
    <div>{config ? <Avatar {...config} /> : <></>}</div>
  )
}

export default Dashboard