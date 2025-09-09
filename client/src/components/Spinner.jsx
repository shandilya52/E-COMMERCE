import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';

const Spinner = ({ path = "login" }) => {
    const [count, setCount]=useState(3)
    const navigate=useNavigate()
    const location=useLocation()
    useEffect(()=>{
        const interval=setInterval(()=>{

            setCount((preValue)=>--preValue)
        },1000)
        count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
        return ()=>{
            clearInterval(interval)
        }
    },[count, navigate, location, path])
  return (
    <div className="flex justify-center items-center h-full w-full flex-col">
      <div className="flex flex-row gap-2">
  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
</div>

<h1>redirecting to you in {count} seconds</h1>
    </div>
  )
}


// Add prop validation
Spinner.propTypes = {
  path: PropTypes.string,
};

export default Spinner
