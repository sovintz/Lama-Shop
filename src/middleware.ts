import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {headers} from "next/headers";
import pageDict, {fallbackDomain} from "@/utils/pageConfig";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const headersList = headers();
    const hostname = headersList.get('host') ?? "localhost:3000";

    if (pageDict[hostname]) {
        // Hostname is in the dictionary, no redirection needed
        return NextResponse.next();
    } else {
        // Hostname is not in the dictionary, redirect to the fallback page
        return NextResponse.redirect(fallbackDomain);
    }
}

export const config = {
    // The above middleware would only run for the "/" path
    matcher: '/',
}