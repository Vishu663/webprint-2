import Routing from "./Routing/Routing";
import { UserProvider } from "./Context/UserProvider";

export default function App() {
  return <>
  <UserProvider>
    <div><Routing /></div>
  </UserProvider>
  </>
}