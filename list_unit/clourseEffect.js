import { useEffect, useState } from "react"

function WatchCount() {
    const [count, setCount] = useState(0);
    
    useEffect(function() {
      setInterval(function log() {
        console.log(`Count is: ${count}`);
      }, 2000);
    }, []);
    return (
      <div>
        {count}
        <button onClick={() => setCount(count + 1) }>
          Increase
        </button>
      </div>
    );
  }

  export default WatchCount