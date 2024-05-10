import repo from "@/repo/statistics"

export async function GET(request, {params}){
    const response = await repo.getUnpurchasedItems();
    return Response.json(response, {status:200})
}