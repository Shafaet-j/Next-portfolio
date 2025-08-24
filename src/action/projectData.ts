"use server"

export async function creteProject(data: any) {

    try {
        console.log(data)

        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/project/create-project`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        return result;
    } catch (error) {
        console.log(error)
    }
}

export async function getAllProject() {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/project/get-all-project`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await res.json();
        return result;
    } catch (error) {
        console.log(error)
    }
}