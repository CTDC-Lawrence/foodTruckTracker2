import Header from "./Header";
import Foodtrucks from "./Foodtrucks";
import Layout from "./Layout";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <AuthProvider initialLoggedInUser="Ronald">
      <Layout startingTheme="light">
        <div>
          <Header />
          <Foodtrucks />
        </div>
      </Layout>
    </AuthProvider>
  );
}

export default App;
