export function formatReais(valueInCents: number) {
    const formattedValue = valueInCents / 100
    return formattedValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}