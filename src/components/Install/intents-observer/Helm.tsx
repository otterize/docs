import React from "react"
import CodeBlock from "@theme/CodeBlock"

export default function Helm() {
    return (
        <>
            <CodeBlock language="shell">{`helm repo add
helm install`}</CodeBlock>
        </>
    )
}