'use client'

import Script from "next/script";

export default function Chatbot() {
    return (<>
        <Script src="/images/chatbot.js" strategy="lazyOnload" onLoad={() => window.initializeChatbot()} />
    </>)
}