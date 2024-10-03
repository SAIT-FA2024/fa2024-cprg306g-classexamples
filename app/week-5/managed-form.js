"use client"

export default function RegistrationForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.dir(event);
    }

    return(
        <form onSubmit={handleSubmit} className="p-4 bg-blue-100">
            <div>
                <label>Full Name:</label>
                <input type="text" placeholder="John Smith"/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" placeholder="example@mail.ca"/>
            </div>
            <div>
                <label>Birthdate:</label>
                <input type="date" />
            </div>
            <div>
                <label>Subscription Type: </label>
                <select>
                    <option selected disabled value="">--- Please select a Plan ---</option>
                    <option value="free">Free Plan</option>
                    <option value="basic">Basic Plan</option>
                    <option value="premium">Premium Plan</option>
                </select>
            </div>
            <div>
                <label>Message:</label>
                <textarea></textarea>
            </div>

            <div>
                <button>Submit Registration</button>
            </div>
        </form>
    );
}