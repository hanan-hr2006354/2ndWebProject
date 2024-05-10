import repo from "@/repo/CustomerRepo"

export async function GET(request, {params}){
    const response = await repo.getCustomer();
    return Response.json(response, {status:200})
}

export async function POST(request, { params }) {
    try {
        const body = await request.json();
        const addCustomer = await repo.addCustomer(body);
        return new Response(JSON.stringify(addCustomer), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error("Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}