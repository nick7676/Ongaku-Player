
import "./App.css";
import { Button } from "./components/retroui/Button";

function App() {


  return (
    <> <div className="flex mt-5 ml-5 justify-center space-x-10">
      <Button>Test</Button>
      <Button variant={"secondary"}>Test</Button>
      <Button variant={"outline"}>Test</Button>
      <Button variant={"link"}>Test</Button>
      <Button variant={"ghost"}>Test</Button>
    </div>
    </>
  );
}

export default App;
