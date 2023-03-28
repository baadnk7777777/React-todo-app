import firebase from '@/utils/firebase';
import app from '@/utils/firebase';
import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';



export const form = () => {






    const [title, setTitle] = useState("");

    const handleOnChange = (e: any) => {
        setTitle(e.target.value);
    }

    const createTodo = async () => {
        const database = getDatabase(app);
        console.log(title);
        await set(ref(database, 'todo/'), {
            title: title,
            complete: false
        });
        console.log("Create Todo Working function.")
    }

    return (
        <div>
            {title}
            <input type="text" onChange={handleOnChange} value={title} />
            <button onClick={createTodo}>Create Todo</button>
        </div>
    )
}

export default form
