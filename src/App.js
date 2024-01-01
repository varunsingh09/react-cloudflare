import { useEffect, useState } from 'react';
import Users from './components/users';

const App = () => {
  const [state, setState] = useState({
    users: []
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        setState({ users: data })
      })
      .catch(console.log)
  }, []);


  return (
    <Users users={state.users} />
  )

}

export default App;
