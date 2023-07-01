import { redirect } from "solid-start"
import { createServerAction$ } from "solid-start/server";
import { sleep } from "~/lib/utils"

export function LoginForm() {

    const [_, { Form }] = createServerAction$(async (formData: FormData) => {
        await sleep(3000);
        const username = formData.get('username');
        const password = formData.get('password')
        console.log({ username, password })
        if (username === "admin") {
            return redirect("/admin");
          } else {
            return redirect('/bookmarks')
          }
    })

    return (
        <div>
            <h3>Login Form</h3>
            <Form>
                <label for="username">Username</label>
                <input id="username" type="text" name="username" />
                <label for="password">Password</label>
                <input id="password" type="password" name="password" />
                <button type="submit" value="submit">Log In</button>
            </Form>
        </div>
    )
}