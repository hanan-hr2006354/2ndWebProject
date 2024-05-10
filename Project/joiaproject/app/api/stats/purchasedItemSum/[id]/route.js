import repo from "@/repo/statistics"


export async function GET(request, {params}){
    try {
                const id=parseInt(params.id);
                const response=await repo.getPurchasedItemsSum(id);
                return Response.json(response, {status:200});
            } catch (error) { console.error("Error:",error);}
}