
"use client";

import { useState, useEffect } from 'react';

import { signIn, signOut } from 'next-auth/react';
import { DefaultSession } from 'next-auth';

export default function TimeThing({ user }: DefaultSession) {
    const [time, setTime] = useState<Date | null>(null);
    useEffect(() => {
        fetch('/api/time')
        .then(res => res.json())
        .then(json => setTime(new Date(json.time)));
    }, []);
    return (
        <div><a href="https://nextjs.org">
                    Next.js!{" "}
                    {time &&
                    `The time is ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
                </a>
        <p>{JSON.stringify(user)}</p>
      <button onClick={() => signIn('discord')}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>);
}