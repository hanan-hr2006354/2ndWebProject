import repo from "@/repo/ItemRepo"

export async function GET(request){
    const { searchParams } = new URL(request.url)

    let filterType = [...searchParams.keys()][0]
    let value = searchParams.get(filterType)
    console.log(`The filter is ${filterType} and the value is ${value}`);

    let response
    switch (filterType) {
            case 'category':
            response = await repo.getItemsByCategory(value)
            break;
            case 'name':
                response = await repo.getItemByName(value.toLowerCase())
                break;
                case 'minPrice':
                    const minPrice = parseFloat(value);
                    response = await repo.getItemsByPriceRange(minPrice, Infinity);
                    break;
                case 'maxPrice':
                    const maxPrice = parseFloat(value);
                    response = await repo.getItemsByPriceRange(0, maxPrice);
                    break;
            default:
                response = await repo.getItem()
        }
        return Response.json(response, { status: 200 })
    }
export async function POST(request, { params }) {
    try {
        const body = await request.json();
        const addItem = await repo.addItem(body);
        return new Response(JSON.stringify(addItem), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error("Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}