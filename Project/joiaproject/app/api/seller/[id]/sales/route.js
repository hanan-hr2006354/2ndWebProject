import repo from "@/repo/SellerRepo";

export async function GET(request, { params }) {
        const id=parseInt(params.id);
        const cPurchase=await repo.getSellerSales(id);
        return Response.json(cPurchase,{status:200});
}
