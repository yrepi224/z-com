"use client"

import {useRouter} from "next/navigation";
import MainPage from "@/app/(beforeLogin)/_component/MainPage";
export default function Login(){
    const router = useRouter();
    router.replace('/i/flow/login');
    return (
        <MainPage />
    );
}