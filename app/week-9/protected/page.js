"use client"

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";

export default function ProtectedPage(){

    const {user} = useUserAuth();

    return(
        <main className="m-5">
            <header>
                <h1>Protected Page</h1>
            </header>
            { user ? (
                <div>
                    <p>Hello, {user.displayName}, your user ID is: {user.uid}</p>
                </div>
            ) : (
                <div>
                    <p>You must be logged in to view this page.</p>
                    <Link href="/week-9/">Click here to return to the Sign In page.</Link>
                </div>
            ) }
        </main>
    );
}