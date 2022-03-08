import React, { useState } from 'react'

import { InputTags } from 'react-bootstrap-tagsinput'
import 'react-bootstrap-tagsinput/dist/index.css'

const TagInput = () => {

    const [state, setState] = useState([])
    const [name, setName] = useState('')

    const handlarSubmit = (e) => {
        e.preventDefault();

        console.log(name);
        console.log(state);
    }

    return (
        <div style={{ margin: 10 }}>


        {/* <form action="/"> */}
        <input type="text" name="name" id="" value={name} onChange={(e) => setName(e.target.value)} />
        <div className='input-group'>
          <InputTags values={state} onTags={(value) => setState(value.values)} />
          <button
            className='btn btn-outline-secondary'
            type='button'
            data-testid='button-clearAll'
            onClick={() => {
              setState([])
            }}
          >
            Delete all
          </button>
        </div>
        <button onClick={handlarSubmit}>save</button>
        {/* </form> */}
        <hr />
        <ol>
          {state.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ol>
      </div>
    )
}

export default TagInput
