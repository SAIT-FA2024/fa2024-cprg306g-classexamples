"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import { useEffect, useState } from "react";
import { dbGetAllBlogPostsByUser } from "./_services/blog-service";

export default function SignInPage(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut(){
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    // console.dir(user);

    const [blogPostList, setBlogPostList] = useState([]);
    useEffect( () => {
        if (user) {
            dbGetAllBlogPostsByUser(user.uid, setBlogPostList);
        }
    }, [user] );

    return(
        <main className="m-5">
            <header>
                <h1 className="text-3xl text-center">Firebase Auth</h1>
            </header>
            { user ? (
                <div>
                    <p>Welcome {user.displayName}!</p>
                    <p>{user.email}</p>
                    <img src={user.photoURL} className="w-10 h-10" />
                    <Link href="/week-10/add-blog-post">Add a new blog post!</Link>
                    <section>
                        <h2>My Blog Posts</h2>
                        <ul>
                            {
                                blogPostList.map( (post) => {
                                    let postUrl = `/week-10/${post.id}`;
                                    return( <li><Link href={postUrl}>{post.title}</Link></li> )
                                } )
                            }
                        </ul>
                    </section>
                    <div>
                    <button
                        type="button"
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                        onClick={handleSignOut}
                    >Sign Out</button>
                    </div>
                </div>
            ) : (
                <div>
                    <button
                        type="button"
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                        onClick={handleSignIn}
                    >Sign In</button>
                </div>
            ) }
        </main>
    );
}