import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = () => (
  <div className="relative">
    <div className="absolute inset-0 transform bg-gradient-to-tr from-primary/20 to-transparent rounded-xl blur-md -rotate-2"></div>
    <div className="relative bg-[#131313] border border-[#333] rounded-xl p-6 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-sm text-center text-gray-400">main.go</div>
      </div>
      <pre className="text-sm font-mono bg-[#0a0a0a] p-4 rounded-lg overflow-x-auto">
        <SyntaxHighlighter
          language="go"
          style={darcula}
          customStyle={{ background: "#0a0a0a" }}
        >
          {`package main

import (
  "fmt"
  "time"
)

func main() {
  fmt.Println("Bem-vindo à Imersão Dominando Go!")

  // Programação concorrente com goroutines
  go func() {
    time.Sleep(1 * time.Second)
    fmt.Println("Concorrência é fácil com Go!")
  }()
    
  // Aguardar a conclusão da goroutine
  time.Sleep(2 * time.Second)
}`}
        </SyntaxHighlighter>
      </pre>
    </div>
  </div>
);

export default Code;
