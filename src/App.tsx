import logo from './logo.svg';
import './App.sass';
import LoadMoreButton from './components/LoadMoreButton'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main>
          <aside>
              <div className='App-filter'>
                  Кількість пересадок
              </div>
          </aside>
          <article>
          <ul className='App-tabs'>
            <li>Найдешевший</li>
            <li>Найшвидший</li>
            <li>Оптимальний</li>
          </ul>
          </article>      
        </main>        

        <LoadMoreButton />
      </div>      
    </>
  )          
}

export default App;
