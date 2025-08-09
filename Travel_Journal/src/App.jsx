import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

function App() {

  const datas = data.map((entry)=>{
    return (
      <div className="flex flex-col p-8 w-full justify-center items-center">
    <Entry {...entry} key={entry.id}/>
    </div>)
  })
  
  return (
    <>
      <Header />
      {datas} 
      

    </>
  )
}

export default App
