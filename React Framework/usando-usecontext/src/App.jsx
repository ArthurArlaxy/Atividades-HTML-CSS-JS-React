import { Header } from "./component/Header";
import { UserInfo } from "./component/UserInfo";
import { UserContext,user } from "./contexts/UserContext";

export default function App(){
  return(
    <UserContext.Provider value={user}>
      <Header/>
      <h1>Usando o createContext e useContext</h1>
      <hr />
      <UserInfo/>
    </UserContext.Provider>
  )
}