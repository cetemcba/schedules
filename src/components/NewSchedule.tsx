import { Combobox } from '@headlessui/react'
import {  FormEvent, useEffect,useState } from 'react'
import { Input } from "./Form/Input"
import {Calendar} from 'react-calendar';

import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';


//const [date, setDate] = useState(new Date())

const laboratories = [
    {
        id: 1,
        name: 'Laboratorio de Informatica',

    },
    {
        id: 2,
        name: 'Laboratorio de Enfermagem',

    },
    {
        id: 3,
        name: 'Laboratorio de Facial',

    },
    {
        id: 4,
        name: 'Laboratorio de Corporal',

    },
  ]

export function NewSchedule(){

    const [selectedPerson, setSelectedPerson] = useState (laboratories[0])
    const [query, setQuery] = useState('')

    /*const filteredPeople =
    query === ''
      ? laboratories
      : laboratories.filter((lab) => {
          return lab.toLowerCase().includes(query.toLowerCase())
        })
    */
    return(
        <>
            <div className="flex space-x-8 flex-col">
                <h1 className="px-4 py-2 text-lg font-medium">Novo Agendamento</h1>
                
                <form className="mt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                    <label htmlFor="game" className="font-semibold">Qual o local?</label>
                    <select
                        name="game"
                        id="game"
                        className="bg-zinc-700 py-3 px-4 rounded text-sm placeholder:text-zinc-400 appearance-none"
                        defaultValue=""
                    >
                        <option disabled value="">Selecione o local que deseja agendar</option>

                        {laboratories.map(lab => {
                        return <option key={lab.id} value={lab.id}>{lab.name}</option>
                        })}
                    </select>
                    </div>

                    <div className="flex flex-col gap-2">
                    <label htmlFor="name">Descrição</label>
                    <Input name="name" id="name" placeholder="Para que proposito usará o laboratório" />
                    </div>

                    <div className="flex flex-col gap-2">
                    <label htmlFor="name">Materiais</label>
                    <Input name="name" id="name" placeholder="Descreva os materiais ultilizados nos procedimentos" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="yearsPlaying">Quantidade</label>
                        <Input name="yearsPlaying" id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="discord">Seu Nome</label>
                        <Input name="discord" id="discord" type="text" placeholder="Usuario#0000" />
                    </div>
                    </div>

                    <div className="flex gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="weekDays">Dia da semana</label>

                        <ToggleGroup.Root
                        type="multiple"
                        className="grid grid-cols-4 gap-2"
                        >
                        <ToggleGroup.Item
                            value="0"
                            title="Domingo"
                            className={`w-8 h-8 rounded {weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                        >
                            D
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="1"
                            title="Segunda"
                            className={`w-8 h-8 rounded {weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                        >
                            S
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="2"
                            title="Terça"
                            className={`w-8 h-8 rounded {weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                        >
                            T
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="3"
                            title="Quarta"
                            className={`w-8 h-8 rounded {weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                        >
                            Q
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="4"
                            title="Quinta"
                            className={`w-8 h-8 rounded {weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                        >
                            Q
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="5"
                            title="Sexta"
                            className={`w-8 h-8 rounded {weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                        >
                            S
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="6"
                            title="Sábado"
                            className={`w-8 h-8 rounded {weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                        >
                            S
                        </ToggleGroup.Item>
                        </ToggleGroup.Root>
                    </div>
                    
                    <div className="flex flex-col gap-2 flex-1">
                        
                        <div className="grid grid-cols-2 gap-2">
                        <label htmlFor="hourStart">Horaio de inicio:</label>
                        <Input name="hourStart" id="hourStart" type="time" placeholder="De" />
                        <label htmlFor="hourStart">Horaio de Termino:</label>
                        <Input name="hourEnd" id="hourEnd" type="time" placeholder="Até" />
                        </div>
                    </div>
                    </div>


                    <footer className="mt-4 flex justify-end gap-4">
                    
                    <button
                        type="submit"
                        className=" bg-blue-500 bg-opacity-20 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-blue-600"
                    >
                        Realizar Agendamento
                    </button>
                    </footer>
                </form>
                
            </div>
        </>
    )

}