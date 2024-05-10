import repo from "@/repo/ItemRepo"



export async function GET(request, {params}){
    try {
                const id=parseInt(params.id);
                const response=await repo.getCustomerbyId(id);
                return Response.json(response, {status:200});
            } catch (error) { console.error("Error:",error);}
}

export async function DELETE(request, { params }) {
    try {
        const id=parseInt(params.id);
        const response=await repo.deleteItem(id);
        return Response.json(response, {status:200});
    } catch (error) { console.error("Error:",error);}
}



export async function PUT(request,{params}) {
    try {
        const id=parseInt(params.id); 
        const cus=await request.json();
        const updateCustomer=await repo.updateItem(id,cus);
        return Response.json(updateCustomer,{ status: 200});
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function POST(request,{params}) {
    try {
        const id=parseInt(params.id); 
        const cus=await request.json();
        const updateCustomer=await repo.addCustomer(id,cus);
        return Response.json(updateCustomer,{ status: 200});
    } catch (error) {
        console.error("Error:", error);
    }
}