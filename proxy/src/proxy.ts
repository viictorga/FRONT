import { NextRequest, NextResponse } from "next/server";



export const proxy = (request: NextRequest) =>{


    const esLegal = request.cookies.get('legal');

    if(esLegal){
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next();
};
