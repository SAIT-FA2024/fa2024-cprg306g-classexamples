import RegistrationForm from "./managed-form";

export default function RegistrationPage(){

    return(
        <main className="p-5">
            <h1 className="text-3xl text-center mb-4 font-serif font-black">Registration</h1>
            <RegistrationForm />
        </main>
    );
}