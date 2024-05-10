import repo from "@/repo/SellingRepo"

export async function GET(request, {params}){
    const response = await repo.getSelling();
    return Response.json(response, {status:200})
}



//????????dont think this is needed
export async function POST(request, { params }) {
    try {
        const body = await request.json();
        const addSelling = await repo.addSelling(body);
        return new Response(JSON.stringify(addSelling), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error("Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}