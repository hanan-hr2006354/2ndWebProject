import repo from "@/repo/CategoryRepo";

export async function GET(request) {
    const { searchParams } = new URL(request.url)

    let filterType = [...searchParams.keys()][0]
    let value = searchParams.get(filterType)
    console.log(`The filter is ${filterType} and the value is ${value}`);

    let response
    switch (filterType) {
        case 'name':
            response = await repo.getCategorybyName(value)
            break;
    }
    return Response.json(response, { status: 200 })

}