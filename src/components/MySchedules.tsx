import { agendametos } from "../utils/utilitarios"

interface Schedulesprops{
    local: string,
    data: string,
    status: string,
}

export function MySchedules(){

    for(let a in agendametos){
        console.log(agendametos[a])
        }
    
    return(
        <>
            <div className="flex flex-row space-x-8">
                <h1 className="px-4 py-2 text-lg font-medium">Meus Agendamentos</h1>
                <a href="/agendar">
                    <button type="button" className="rounded-md bg-blue-500 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Novo Agendamento</button>
                </a>
            </div>
            <div>
            <table className="w-full mt-8 mb-8 mr-16">
                <thead className="border-b border-zinc-800">
                    <th>Local</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {agendametos.map((agendameto,id) => {
                        return(
                            <tr className="border-b border-zinc-800">
                                <td className="p-1">{agendameto.local}</td>
                                <td className="p-1">{agendameto.date}</td>
                                <td className="p-1">{agendameto.hour}</td>
                                <td className="p-1">{agendameto.status}</td>
                            </tr>
                        )
                    })}  
                </tbody>
            </table>
            </div>
        </>
        
    )
}