import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";

function App() {

  const title:string ="Hello Reat Typescript"

  return (
    <>
      <div>
        <Heading title={title}/>
        <Section title={"My Section title from App component"}>This is children ReactNode message.</Section>
        <Counter/>
      </div>
    </>
  )
}

export default App
