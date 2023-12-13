import './App.css'
import { inputsProps } from './data/inputs'
import Input from './components/Input'
import { useItems } from './hooks/useItems'

function App() {
  const [items, handleSubmitForm] = useItems()

  return (
    <main>
      <aside>
        <h1>Adding Elements on a List</h1>
        <form
          method='post'
          onSubmit={handleSubmitForm}>
          {inputsProps.map((inp) => (
            <Input
              key={inp.id}
              id={inp.id}
              name={inp.name}
              type={inp.type}
              placeholder={inp.placeholder}
              error={inp.error && inp.error}
              required={inp.required}
              pattern={inp.pattern}
              label={inp.label}
            />
          ))}
          <button>Add a element</button>
        </form>
      </aside>
      <section>
        <h2>My List </h2>
        <ul>
          {items.map((game) => (
            <li key={game.id}>
              <p>{game.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
