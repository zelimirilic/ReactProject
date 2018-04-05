import React from "react";

export const Input = (props) => {


    return (
        <div class="row">
            <div class="input-field col s12">
                <input onChange={props.onChangeInputValue} value={props.searchValue} id="first_name2" type="text" class="validate" />
                <label class="active" for="first_name2"></label>
            </div>
        </div>
    );
}
