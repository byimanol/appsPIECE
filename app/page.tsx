"use client"

import { useRouter } from 'next/navigation'

export const runtime ="edge";

export default function Home() {
    return (
        useRouter().push('/wheel')
    )
}
