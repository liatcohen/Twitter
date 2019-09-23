import React, { useState } from 'react'
import { TextField } from '@material-ui/core';

function NewTweet(props) {
    const [text, setText] = useState('')
    return (
        <div>
        <TextField
                id="outlined-multiline-static"
                // label="Multiline"
                multiline
                rows="4"
                // defaultValue="Default Value"
                margin="normal"
                variant="outlined"
                placeholder="What's happening?"
            />
        </div>
    )
}

export default NewTweet
