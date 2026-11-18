export default function MagiaDoJSX(){
    const magia = <strong>Html dentro de JavaScript!</strong>
    const tecnoligias = "React e Next.js"

    return(
        <div className = 'bg-blue-300 p-3 m-3 rounded-x1' >
            <p>Este é meu componente MagiaDoJSX.</p>
            <p>Um componente é uma função que retorna JSX -{magia}. </p>
            <p>Os componentes são usados em {tecnoligias} .</p>
        </div>
    )
}