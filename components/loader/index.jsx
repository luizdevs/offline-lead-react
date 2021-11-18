export default function Loader({ size }){
    return <img src="/img/loader.svg" alt="Carregando" title="Carregando" height={size ?? 40} />
}