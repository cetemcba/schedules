import { Combobox } from '@headlessui/react'
import { useState } from 'react'

const people = [
    'Durward Reynolds',
    'Kenton Towne',
    'Therese Wunsch',
    'Benedict Kessler',
    'Katelyn Rohan',
  ]

export function NewSchedule(){

    const [selectedPerson, setSelectedPerson] = useState (people[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase())
        })

    return(
        <>
            <div className="flex space-x-8 flex-col">
                <h1 className="px-4 py-2 text-lg font-medium">Novo Agendamento</h1>
                
                    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
                        <Combobox.Input  className="text-zinc-900" onChange={(event) => setQuery(event.target.value)} />
                        <Combobox.Options>
                            {filteredPeople.map((person) => (
                            <Combobox.Option key={person} value={person}>
                                {person}
                            </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Combobox>
                
            </div>
        </>
    )

}