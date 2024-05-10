import repo from "@/repo/PurchaseRepo"



export async function GET(request, {params}){
    try {
                const id=parseInt(params.id);
                const response=await repo.getPurchaseById(id);
                return Response.json(response, {status:200});
            } catch (error) { console.error("Error:",error);}
}


export async function DELETE(request, { params }) {
    try {
        const id=parseInt(params.id);
        const response=await repo.deletePurchase(id);
        return Response.json(response, {status:200});
    } catch (error) { console.error("Error:",error);}
}
