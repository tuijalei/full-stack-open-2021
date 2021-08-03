import { Link } from 'react-router-dom'

//Creating links in the app
//<Link>: "Provides declarative, accessible navigation around your application."
const Menu = () => {
    const padding = {
      paddingRight: 5
    }
    return (
      <div>
        <Link style={padding} to="/">anecdotes</Link>
        <Link style={padding} to="/create">create new</Link>
        <Link style={padding} to="about">about</Link>
      </div>
    )
  }

  export default Menu