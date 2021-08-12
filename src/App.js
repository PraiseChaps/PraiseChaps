import PreCall from './PreCall';
import Error from './Error';
import './App.css';
import { useState,useEffect} from 'react';
import { makeStyles} from '@material-ui/core'

function App() {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  /*
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(true)
      const res = await fetch('............./')
      const { data } = await res.json()

      setEventData(data)
      setLoading(false)
    }

    fetchData()
  }, [])
  */

  const useStyles = makeStyles({
      app: {
        display: 'flex',
        justifyContent: 'space-around'
      }
  })

  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Error/>
      { error ? < Error/> : <PreCall /> }
    </div>
  );
}

export default App;
