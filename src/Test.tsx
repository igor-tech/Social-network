import React, {useEffect, useState} from 'react';

export  function Hello(props: {name?: string}) {
    if (props.name) {
        return <h1>Hello, {props.name}!</h1>;
    } else {
        return <span>Hey, stranger</span>;
    }
}
type UserType = {
    name?: string,
    age?: string,
    address?: string
}

export function User(props: {id: string} ) {
    const [user, setUser] = useState<UserType | null>(null);

    async function fetchUserData(id: string) {
        const response = await fetch("/" + id);
        setUser(await response.json());
    }

    useEffect(() => {
        fetchUserData(props.id);
    }, [props.id]);

    if (!user) {
        return "loading...";
    }

    return (
        <details>
            <summary>{user.name}</summary>
            <strong>{user.age}</strong> years old
            <br />
            lives in {user.address}
        </details>
    );
}