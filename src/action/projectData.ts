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

export async function getAllProject(filter?, search?, sort?, pagination?) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/project/get-all-project`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ filter, search, sort, pagination }), // ✅ fixed
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch projects: ${res.statusText}`);
        }

        const result = await res.json();
        console.log(result,"action")
        return result;
    } catch (error) {
        console.error("Error in getAllProject:", error);
        throw error;
    }
}

export async function getSingleProject(id:any) {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/project/get-single-project/${id}`, {
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