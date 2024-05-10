import repo from "@/repo/PurchaseRepo"

export async function GET(request, {params}){
    const response = await repo.getPurchase();
    return Response.json(response, {status:200})
}