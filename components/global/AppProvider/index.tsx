'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import localFont from "next/font/local";

const geistSans = localFont({
    src: "../../../app/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../../../app/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

interface Props {
    children: React.ReactNode;
}

const AppProvider = (props: Props) => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-t from-slate-200 to-background text-gray-600 min-h-screen`}
            >
                {props.children}
            </body>
        </QueryClientProvider>
    );
}
export default AppProvider;