import repo from "@/repo/CustomerRepo";

export async function GET(request, { params }) {
        const id=parseInt(params.id);
        const cPurchase=await repo.getCustomerPurchases(id);
        return Response.json(cPurchase,{status:200});
}



export async function POST(request,{params}) {
    try {
        const id=parseInt(params.id); 
        const cus=await request.json();
        const addCustomer=await repo.addPurchase(id,cus);
        return Response.json(addCustomer,{ status: 200});
    } catch (error) {
        console.error("Error:", error);
    }
}