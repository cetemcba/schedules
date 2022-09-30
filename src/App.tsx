import { MySchedules } from "./components/MySchedules"
import { NewSchedule } from "./components/NewSchedule"
import { agendametos } from "./utils/utilitarios"

function App() {
  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-10">
        <img src={"../public/cetemLogoBranca.png"} alt="Logo" className="w-20"/>
        <h1 className="text-2xl font-bold m-4">Faça seu Agendamento</h1>
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-3/6 ">
         <MySchedules/>
         <NewSchedule/>
        </div>
      </div>
    </>

    )
}

export default App
