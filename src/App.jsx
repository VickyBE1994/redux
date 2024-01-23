import React from 'react'
import UserContextComponents from './Components/UserContextComponents'
import Cards from './Components/Cards'

export const UserContext = React.createContext()
function App() {

return (
    <div className="container">

             <UserContextComponents>
                 <Cards/>
              </UserContextComponents>

    </div>
)

}
export default App