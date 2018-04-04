import React from 'react'
import { Input } from './Input'

export const Search = (props) => {
    return (
        <nav>
            <div class="nav-wrapper">
                <Input onChangeInputValue={props.onChangeInputValue} searchValue={props.searchValue} />
            </div>
        </nav>
    )
}