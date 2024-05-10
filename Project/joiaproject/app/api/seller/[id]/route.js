import repo from "@/repo/SellerRepo"




export async function GET(request, {params}){
    try {
                const id=parseInt(params.id);
                const response=await repo.getAllItemsWithUserNamesAndQuantities(id);
                return Response.json(response, {status:200});
            } catch (error) { console.error("Error:",error);}
}

export async function DELETE(request, { params }) {
    try {
        const id=parseInt(params.id);
        const response=await repo.deleteSeller(id);
        return Response.json(response, {status:200});
    } catch (error) { console.error("Error:",error);}
}



export async function PUT(request,{params}) {
    try {
        const id=parseInt(params.id); 
        const cus=await request.json();
        const updateCustomer=await repo.updateSeller(id,cus);
        return Response.json(updateCustomer,{ status: 200});
    } catch (error) {
        console.error("Error:", error);
    }
}
