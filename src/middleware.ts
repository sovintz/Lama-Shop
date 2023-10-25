import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {headers} from "next/headers";
import {useThemeStore} from "@/stores/themeStore";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const headersList = headers();
    const hostname = headersList.get('host');
    console.log(hostname);
}

export const config = {
    // The above middleware would only run for the "/" path
    matcher: '/',
}