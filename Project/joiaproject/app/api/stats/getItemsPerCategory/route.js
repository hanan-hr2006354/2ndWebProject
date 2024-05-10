import repo from "@/repo/statistics"

export async function GET(request, {params}){
    const response = await repo.getItemsPerCategory();
    return Response.json(response, {status:200})
}