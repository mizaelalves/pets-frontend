export const TextServices ={
  limitarTexto( text:string, tamanhoMaximo: number): string{
    if(text.length <tamanhoMaximo){
      return text
    }
    return text.slice(0, tamanhoMaximo) + "..."
  }
}